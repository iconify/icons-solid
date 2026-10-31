import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei3ecxn7v.css';
import '../../css/u/ua5_vnboa.css';
import '../../css/m/mul0oivqe.css';
import '../../css/d/dhezjmt0p.css';
import '../../css/c/crhmcbtst.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ei3ecxn7v"/><path class="ua5_vnboa"/><path class="mul0oivqe"/><path clip-rule="evenodd" class="dhezjmt0p"/><path clip-rule="evenodd" class="crhmcbtst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:love-smiley-pop"} {...others} />);
}

export default Component;
