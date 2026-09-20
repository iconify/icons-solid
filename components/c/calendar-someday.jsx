import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jorbe3sdi.css';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wd5v0hbqi.css';
import '../../css/s/sy7s6gb4r.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVG4FH3bcts" class="n1mjunbsu"><path class="jorbe3sdi"/></mask><g class="flen3tbdj"><path mask="url(#SVG4FH3bcts)" class="wd5v0hbqi"/><path class="sy7s6gb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:calendar-someday"} {...others} />);
}

export default Component;
