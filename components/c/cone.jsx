import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/a/ar5pfqbcg.css';
import '../../css/y/ya1a-9i3s.css';
import '../../css/e/eyu29obsy.css';
import '../../css/y/ywr789bph.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="ar5pfqbcg"/><path class="ya1a-9i3s"/><path class="eyu29obsy"/><path class="ywr789bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cone"} {...others} />);
}

export default Component;
