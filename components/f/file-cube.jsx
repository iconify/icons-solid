import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpr9fpbng.css';
import '../../css/j/jyxh05bww.css';
import '../../css/j/j1zomcb9f.css';
import '../../css/n/n1ox7wpzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hpr9fpbng"/><path class="jyxh05bww"/><path class="j1zomcb9f"/><path class="n1ox7wpzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-cube"} {...others} />);
}

export default Component;
