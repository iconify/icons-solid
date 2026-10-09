import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx6btm5lw.css';
import '../../css/v/vm-h8y56c.css';
import '../../css/i/iaax7gb6o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bx6btm5lw"/><path class="vm-h8y56c"/><path class="iaax7gb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pumped-hydro-20-bold"} {...others} />);
}

export default Component;
