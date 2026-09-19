import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z37uebc7b.css';
import '../../css/a/askoajqcq.css';
import '../../css/o/o7v6_-bes.css';
import '../../css/f/f3im07b2u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z37uebc7b"/><path class="askoajqcq"/><path class="o7v6_-bes"/><path class="f3im07b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dslr-duo"} {...others} />);
}

export default Component;
