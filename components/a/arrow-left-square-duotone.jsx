import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/b/bvc9tg82w.css';
import '../../css/k/k28ck0b3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="bvc9tg82w"/><path class="k28ck0b3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:arrow-left-square-duotone"} {...others} />);
}

export default Component;
