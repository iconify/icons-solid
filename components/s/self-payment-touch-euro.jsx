import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pophfab3n.css';
import '../../css/k/kdll3bcvp.css';
import '../../css/j/jqu5yptnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pophfab3n"/><path class="kdll3bcvp"/><path class="jqu5yptnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:self-payment-touch-euro"} {...others} />);
}

export default Component;
