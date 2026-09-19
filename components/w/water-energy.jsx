import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sgur_bq2l.css';
import '../../css/h/hlwh9rh4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sgur_bq2l"/><path class="hlwh9rh4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:water-energy"} {...others} />);
}

export default Component;
