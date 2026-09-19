import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rdqrvjbdn.css';
import '../../css/z/z5jau7bwx.css';
import '../../css/f/fr14i5sgw.css';
import '../../css/f/f6jlbbbjk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="rdqrvjbdn"/><path class="z5jau7bwx"/><path class="fr14i5sgw"/><path class="f6jlbbbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:bun-lock"} {...others} />);
}

export default Component;
