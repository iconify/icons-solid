import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0-ptubdh.css';
import '../../css/s/sjmjdxbfs.css';
import '../../css/s/sq1b530py.css';
import '../../css/l/l40tdpssu.css';
import '../../css/f/fklb1hbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c0-ptubdh wm-shadow"/><path class="sjmjdxbfs wm-shadow"/><path class="sq1b530py"/><path class="l40tdpssu"/><path class="fklb1hbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hospital"} {...others} />);
}

export default Component;
