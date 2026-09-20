import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xjfumcb3t.css';
import '../../css/h/hwvh15dbf.css';
import '../../css/w/wgurmr13m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="xjfumcb3t"/><path class="hwvh15dbf"/><path class="wgurmr13m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:stamp-2"} {...others} />);
}

export default Component;
