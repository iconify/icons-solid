import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6yqdssfg.css';
import '../../css/k/kyfg5ffjz.css';
import '../../css/c/ch-h2szyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a6yqdssfg"/><path class="kyfg5ffjz"/><path class="ch-h2szyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-card-remove-thin"} {...others} />);
}

export default Component;
