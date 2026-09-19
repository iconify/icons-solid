import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cmsl8lt0e.css';
import '../../css/w/wvj61cc2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cmsl8lt0e"/><path class="wvj61cc2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:settings-01"} {...others} />);
}

export default Component;
