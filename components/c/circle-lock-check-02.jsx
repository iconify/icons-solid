import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wzzj1qb9b.css';
import '../../css/i/i3jt6ispm.css';
import '../../css/h/htizzhbzw.css';
import '../../css/n/nsynmcdef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wzzj1qb9b"/><path class="i3jt6ispm"/><circle class="htizzhbzw"/><path class="nsynmcdef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-lock-check-02"} {...others} />);
}

export default Component;
