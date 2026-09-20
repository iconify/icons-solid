import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyqotpbcg.css';
import '../../css/l/l4ln0kb4u.css';
import '../../css/e/e6mlo8hhp.css';
import '../../css/x/x-fkqvbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lyqotpbcg"><rect class="l4ln0kb4u"/><rect class="e6mlo8hhp"/><path class="x-fkqvbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:headphones-fill-duotone"} {...others} />);
}

export default Component;
