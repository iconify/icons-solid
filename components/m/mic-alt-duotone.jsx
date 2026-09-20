import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyqotpbcg.css';
import '../../css/s/sln3okb-w.css';
import '../../css/g/g2y24gmro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lyqotpbcg"><rect class="sln3okb-w"/><path class="g2y24gmro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mic-alt-duotone"} {...others} />);
}

export default Component;
