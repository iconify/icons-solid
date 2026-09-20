import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k43av-fvi.css';
import '../../css/m/mmfuymbtq.css';
import '../../css/l/lhqw-e7pa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k43av-fvi"/><path class="mmfuymbtq"/><path class="lhqw-e7pa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:currency-sign-kips-increase"} {...others} />);
}

export default Component;
