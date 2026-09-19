import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/squcus_df.css';
import '../../css/p/pjdn5g3ov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="squcus_df"/><path class="pjdn5g3ov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save"} {...others} />);
}

export default Component;
