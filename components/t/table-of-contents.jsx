import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b2j3gwbef.css';
import '../../css/h/hekjs4bre.css';
import '../../css/y/yooq7cc4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b2j3gwbef wm-shadow"/><path class="hekjs4bre wm-shadow"/><path class="yooq7cc4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:table-of-contents"} {...others} />);
}

export default Component;
