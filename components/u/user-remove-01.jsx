import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/okg0y9bwh.css';
import '../../css/k/kl435db5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="okg0y9bwh"/><circle class="kl435db5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-remove-01"} {...others} />);
}

export default Component;
