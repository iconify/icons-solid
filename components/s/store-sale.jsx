import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j9yetaccg.css';
import '../../css/n/nn-2x7zrv.css';
import '../../css/s/sfc0dobyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="j9yetaccg"/><path class="nn-2x7zrv"/><path class="sfc0dobyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:store-sale"} {...others} />);
}

export default Component;
