import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bztwgo5oc.css';
import '../../css/n/n21ra0ylq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bztwgo5oc"/><path class="n21ra0ylq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-phone-landscape-02"} {...others} />);
}

export default Component;
