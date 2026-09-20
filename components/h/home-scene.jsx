import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cuc7r9bua.css';
import '../../css/e/ek0vygbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="cuc7r9bua"/><path class="ek0vygbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:home-scene"} {...others} />);
}

export default Component;
