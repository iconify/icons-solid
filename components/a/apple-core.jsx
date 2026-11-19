import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6921x8_u.css';
import '../../css/u/ux7ps9bfj.css';
import '../../css/w/w8iddeb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a6921x8_u"/><path class="ux7ps9bfj"/><path class="w8iddeb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:apple-core"} {...others} />);
}

export default Component;
