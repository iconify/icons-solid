import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l-le6db3g.css';
import '../../css/b/boua-5_zk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l-le6db3g"/><path class="boua-5_zk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ubuntu-logo"} {...others} />);
}

export default Component;
