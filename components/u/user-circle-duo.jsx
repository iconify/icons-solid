import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/od2shit8j.css';
import '../../css/h/h_flpcrho.css';
import '../../css/c/cm0a-46ib.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="od2shit8j"/><path class="h_flpcrho"/><path class="cm0a-46ib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:user-circle-duo"} {...others} />);
}

export default Component;
