import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8f071i3i.css';
import '../../css/u/uox72r80z.css';
import '../../css/z/zrdedp6af.css';
import '../../css/x/x9csug_0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v8f071i3i"/><path class="uox72r80z"/><circle class="zrdedp6af"/><path class="x9csug_0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:mask-snorkel"} {...others} />);
}

export default Component;
