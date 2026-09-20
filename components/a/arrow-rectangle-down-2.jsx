import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h6xo0_btj.css';
import '../../css/b/b3c550_rl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h6xo0_btj"/><path clip-rule="evenodd" class="b3c550_rl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-rectangle-down-2"} {...others} />);
}

export default Component;
