import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/s6m2yab9o.css';
import '../../css/o/o24qvnbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="s6m2yab9o"/><path class="o24qvnbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:snorkel-mask-1"} {...others} />);
}

export default Component;
