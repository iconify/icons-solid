import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k7zv8zo7d.css';
import '../../css/z/z6splzb2k.css';
import '../../css/q/q-qoe2btc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k7zv8zo7d"/><path class="z6splzb2k"/><path class="q-qoe2btc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ball-american-football"} {...others} />);
}

export default Component;
