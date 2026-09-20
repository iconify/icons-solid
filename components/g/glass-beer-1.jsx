import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vfk7oq95l.css';
import '../../css/f/f42nu2bob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="vfk7oq95l"/><path class="f42nu2bob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:glass-beer-1"} {...others} />);
}

export default Component;
