import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i9x5yqbwe.css';
import '../../css/b/bikvxdbad.css';
import '../../css/s/s8uiupbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="i9x5yqbwe"/><path class="bikvxdbad"/><path class="s8uiupbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:compass"} {...others} />);
}

export default Component;
