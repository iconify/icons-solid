import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uy88ynb-c.css';
import '../../css/n/nsujc7b7z.css';
import '../../css/y/yjelvclql.css';
import '../../css/b/bmq_xw1uu.css';
import '../../css/q/q53ljtb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uy88ynb-c wm-shadow"/><path class="nsujc7b7z wm-shadow"/><path class="yjelvclql"/><path class="bmq_xw1uu"/><path class="q53ljtb5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:stocking"} {...others} />);
}

export default Component;
