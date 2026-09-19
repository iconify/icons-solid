import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itd9-dnso.css';
import '../../css/t/txhkf0bna.css';
import '../../css/w/wnv60uony.css';
import '../../css/l/loj-b5gjc.css';
import '../../css/b/bf6w7kqtm.css';
import '../../css/u/u1sh0jp5n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="itd9-dnso"/><path class="txhkf0bna"/><path class="wnv60uony"/><path class="loj-b5gjc"/><path class="bf6w7kqtm"/><path class="u1sh0jp5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:parrot"} {...others} />);
}

export default Component;
