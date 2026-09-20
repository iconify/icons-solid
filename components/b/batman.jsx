import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zayijjraj.css';
import '../../css/z/z6f1rffab.css';
import '../../css/p/pwgwuw6ri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zayijjraj"/><path class="z6f1rffab"/><path class="pwgwuw6ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:batman"} {...others} />);
}

export default Component;
