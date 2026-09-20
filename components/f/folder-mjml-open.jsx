import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsijkbbus.css';
import '../../css/m/m3bl0tblc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hsijkbbus"/><path class="m3bl0tblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-mjml-open"} {...others} />);
}

export default Component;
