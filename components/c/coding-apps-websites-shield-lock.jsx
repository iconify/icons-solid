import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2dktezep.css';
import '../../css/j/jvok5pbbw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y2dktezep"/><path class="jvok5pbbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-shield-lock"} {...others} />);
}

export default Component;
