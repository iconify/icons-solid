import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbeo_v74l.css';
import '../../css/i/i3aplqbmt.css';
import '../../css/t/tr0jq53cg.css';
import '../../css/c/c4il1abgs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cbeo_v74l"/><path class="i3aplqbmt"/><path class="tr0jq53cg"/><path class="c4il1abgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dictionary-language-book"} {...others} />);
}

export default Component;
