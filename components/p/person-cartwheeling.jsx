import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/h/hhvthyu9m.css';
import '../../css/f/ftf_v_bxo.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/c/cgxswbbyp.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="hhvthyu9m"/><path class="ftf_v_bxo"/></g><g class="x8poo_bjf"><circle class="hhvthyu9m"/><path class="cgxswbbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-cartwheeling"} {...others} />);
}

export default Component;
