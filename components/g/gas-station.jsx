import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mo1h2b7nw.css';
import '../../css/q/qotgo0b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="mo1h2b7nw"/><path class="qotgo0b5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:gas-station"} {...others} />);
}

export default Component;
