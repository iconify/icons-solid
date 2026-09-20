import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gavkigb0a.css';
import '../../css/j/j3mso-bst.css';
import '../../css/i/i7xxw6b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g display="block"><path class="gavkigb0a"/><path class="j3mso-bst"/><path class="i7xxw6b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-colaboratory"} {...others} />);
}

export default Component;
