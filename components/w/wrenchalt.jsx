import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv_1hsb5h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cv_1hsb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:wrenchalt"} {...others} />);
}

export default Component;
