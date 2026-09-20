import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/qewktib9h.css';
import '../../css/a/atbwjqbws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="qewktib9h"/><path class="atbwjqbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:warehouse-2"} {...others} />);
}

export default Component;
