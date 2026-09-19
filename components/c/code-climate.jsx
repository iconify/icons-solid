import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdmmufb4b.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(1.00302 0 0 1 -.05 0)" class="jdmmufb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:code-climate"} {...others} />);
}

export default Component;
