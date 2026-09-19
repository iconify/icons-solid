import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rp16bptoo.css';
import '../../css/v/vgl5229gh.css';
import '../../css/j/jdsh2qbwv.css';
import '../../css/b/bssikkbkz.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rp16bptoo"/><path class="vgl5229gh"/><path class="jdsh2qbwv"/><path class="bssikkbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:bq-sa"} {...others} />);
}

export default Component;
