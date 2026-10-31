import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rg-6mqbtj.css';
import '../../css/e/ef_ff_j4i.css';
import '../../css/n/natiuwblb.css';
import '../../css/g/g6xqmd98j.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rg-6mqbtj"/><path class="ef_ff_j4i wm-shine"/><path class="natiuwblb wm-k"/><path class="g6xqmd98j wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gift-stack"} {...others} />);
}

export default Component;
