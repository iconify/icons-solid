import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvnj0gg6v.css';
import '../../css/j/js8mytioh.css';
import '../../css/t/t-7jnmeji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rvnj0gg6v"/><path class="js8mytioh"/><path class="t-7jnmeji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layers-2-duotone"} {...others} />);
}

export default Component;
