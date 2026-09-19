import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxv4iwbfk.css';
import '../../css/o/ojbsnh9jw.css';
import '../../css/o/ornlhixah.css';
import '../../css/s/sfzlwaceu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oxv4iwbfk"/><path clip-rule="evenodd" class="ojbsnh9jw"/><path class="ornlhixah"/><path clip-rule="evenodd" class="sfzlwaceu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file-remove-1-outline"} {...others} />);
}

export default Component;
