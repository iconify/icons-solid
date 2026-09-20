import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/t_i2hmbdh.css';
import '../../css/v/vzl809j6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="t_i2hmbdh"/><path class="vzl809j6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:logout-1"} {...others} />);
}

export default Component;
