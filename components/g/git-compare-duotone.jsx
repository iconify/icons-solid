import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euxpybc-u.css';
import '../../css/o/oqdy_ubyq.css';
import '../../css/h/h54h6zbmm.css';
import '../../css/o/ob4kuqbkv.css';
import '../../css/u/u--hmrfbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="euxpybc-u"/><path class="oqdy_ubyq"/><path class="h54h6zbmm"/><path class="ob4kuqbkv"/><path class="u--hmrfbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-compare-duotone"} {...others} />);
}

export default Component;
