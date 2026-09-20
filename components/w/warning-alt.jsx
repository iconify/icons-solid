import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rlqfkfbif.css';
import '../../css/f/flen3tbdj.css';
import '../../css/u/uznvvccio.css';
import '../../css/k/k68kh8b5h.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVG9GYF5cpU" class="n1mjunbsu"><path class="rlqfkfbif"/></mask><g class="flen3tbdj"><path class="uznvvccio"/><path mask="url(#SVG9GYF5cpU)" class="k68kh8b5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:warning-alt"} {...others} />);
}

export default Component;
