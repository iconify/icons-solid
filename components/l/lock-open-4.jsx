import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d0bg-d8ye.css';
import '../../css/o/o-_l8bb1k.css';
import '../../css/q/q-ybajblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="d0bg-d8ye"/><path class="o-_l8bb1k"/><path class="q-ybajblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:lock-open-4"} {...others} />);
}

export default Component;
