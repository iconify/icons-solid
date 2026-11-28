import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpa1o5b9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpa1o5b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:paint-bucket-check"} {...others} />);
}

export default Component;
