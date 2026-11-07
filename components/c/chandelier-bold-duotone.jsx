import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv5nl_bjz.css';
import '../../css/y/yq0r6kchx.css';
import '../../css/h/hp-w9zbfb.css';
import '../../css/o/oyw1l7bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pv5nl_bjz"/><path class="yq0r6kchx"/><path class="hp-w9zbfb"/><path class="oyw1l7bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chandelier-bold-duotone"} {...others} />);
}

export default Component;
