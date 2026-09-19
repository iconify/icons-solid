import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i528auvyg.css';
import '../../css/w/w-90lob-j.css';
import '../../css/d/d48yt1b-u.css';
import '../../css/b/b-2z5kift.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><g transform="translate(4 3)"><ellipse class="i528auvyg"/><ellipse class="w-90lob-j"/><path class="d48yt1b-u"/></g><path class="b-2z5kift"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:truck"} {...others} />);
}

export default Component;
