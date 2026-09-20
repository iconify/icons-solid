import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7-vabcui.css';
import '../../css/m/m9f971dsh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l7-vabcui"/><path class="m9f971dsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:heading-2-paragraph-styles-heading-flat"} {...others} />);
}

export default Component;
