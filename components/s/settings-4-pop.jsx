import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/h/hcqlggr0s.css';
import '../../css/g/g6u5fqeds.css';
import '../../css/z/zfb55lbdw.css';
import '../../css/b/b9vdrkbbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="hcqlggr0s"/><path class="g6u5fqeds"/><path class="zfb55lbdw"/><path class="b9vdrkbbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:settings-4-pop"} {...others} />);
}

export default Component;
