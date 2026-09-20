import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mi_udjwiv.css';
import '../../css/y/yxtj63b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mi_udjwiv"/><path class="yxtj63b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-down-to-arc"} {...others} />);
}

export default Component;
