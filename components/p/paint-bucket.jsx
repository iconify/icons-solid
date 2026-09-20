import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbynv2bfm.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="pbynv2bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:paint-bucket"} {...others} />);
}

export default Component;
