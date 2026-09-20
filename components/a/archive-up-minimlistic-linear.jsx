import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hcjgn7xxd.css';
import '../../css/k/k99btubkh.css';
import '../../css/l/lamw8tlou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hcjgn7xxd"/><path class="k99btubkh"/><path class="lamw8tlou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-minimlistic-linear"} {...others} />);
}

export default Component;
