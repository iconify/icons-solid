import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/tswci7b9s.css';
import '../../css/a/agrcop6be.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="tswci7b9s"/><path class="agrcop6be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-night"} {...others} />);
}

export default Component;
