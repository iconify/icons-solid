import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dw11w-k7r.css';
import '../../css/e/e2a3plb4d.css';
import '../../css/e/eondm3bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="dw11w-k7r"/><path class="e2a3plb4d"/><path class="eondm3bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:multi-platform-2"} {...others} />);
}

export default Component;
