import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9sbrvuos.css';
import '../../css/l/lb9wnv3nq.css';
import '../../css/d/dho87mbca.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f9sbrvuos"/><path clip-rule="evenodd" class="lb9wnv3nq"/><path class="dho87mbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:radio-flat"} {...others} />);
}

export default Component;
