import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9gaorbey.css';
import '../../css/o/oqdy_ubyq.css';
import '../../css/h/h54h6zbmm.css';
import '../../css/o/ob4kuqbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z9gaorbey"/><path class="oqdy_ubyq"/><path class="h54h6zbmm"/><path class="ob4kuqbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-pull-request-closed-duotone"} {...others} />);
}

export default Component;
