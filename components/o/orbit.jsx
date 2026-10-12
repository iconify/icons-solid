import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbw5k0b5p.css';
import '../../css/g/g8ugtkb8k.css';
import '../../css/x/xb47ufbha.css';
import '../../css/u/uperkmc6m.css';
import '../../css/a/a4qkyxbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="qbw5k0b5p"/><circle class="g8ugtkb8k"/><circle class="xb47ufbha"/><circle class="uperkmc6m"/><path class="a4qkyxbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:orbit"} {...others} />);
}

export default Component;
