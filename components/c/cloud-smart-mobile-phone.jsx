import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zrv0qxp1c.css';
import '../../css/n/n6mgr1nnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zrv0qxp1c"/><path class="n6mgr1nnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cloud-smart-mobile-phone"} {...others} />);
}

export default Component;
