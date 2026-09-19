import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtmxd4b4h.css';
import '../../css/r/rn2kcz5al.css';
import '../../css/l/lg6jjqbgi.css';
import '../../css/t/t74-6o1oe.css';
import '../../css/y/y4_fhtb_d.css';
import '../../css/k/kpxfszbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtmxd4b4h"/><circle class="rn2kcz5al"/><circle class="lg6jjqbgi"/><circle class="t74-6o1oe"/><circle class="y4_fhtb_d"/><path class="kpxfszbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cluster-role"} {...others} />);
}

export default Component;
