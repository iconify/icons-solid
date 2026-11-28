import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i8g04wnih.css';
import '../../css/p/p9jlw9bmd.css';
import '../../css/n/npnurpite.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i8g04wnih"/><path class="p9jlw9bmd"/><path class="npnurpite"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-pisces-duo"} {...others} />);
}

export default Component;
