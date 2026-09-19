import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/air91ebzv.css';
import '../../css/a/akj3vibqt.css';
import '../../css/a/afagjbcat.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="air91ebzv"/><path class="akj3vibqt"/><path class="afagjbcat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bj"} {...others} />);
}

export default Component;
