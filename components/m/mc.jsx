import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3_i0qbqu.css';
import '../../css/o/o8b2c2wws.css';

const viewBox = {"width":301,"height":241};
const content = `<g class="ft5dv1b6b"><path class="c3_i0qbqu"/><path class="o8b2c2wws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mc"} {...others} />);
}

export default Component;
