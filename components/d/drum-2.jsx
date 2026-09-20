import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/u1l5wacgu.css';
import '../../css/y/ynbnkmbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="u1l5wacgu"/><path class="ynbnkmbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:drum-2"} {...others} />);
}

export default Component;
