import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rsjxhzb4f.css';
import '../../css/i/ijf11_a_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="rsjxhzb4f"/><path class="ijf11_a_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:download-2"} {...others} />);
}

export default Component;
