import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/b/bvc9tg82w.css';
import '../../css/i/ir-_s_bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="bvc9tg82w"/><path class="ir-_s_bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:projects-duotone"} {...others} />);
}

export default Component;
