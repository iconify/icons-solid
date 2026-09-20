import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz7sr6bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kz7sr6bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:circle-layer"} {...others} />);
}

export default Component;
