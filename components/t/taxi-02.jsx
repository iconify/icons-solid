import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw0cf-x6f.css';
import '../../css/w/wrwp7q77t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gw0cf-x6f"/><path class="wrwp7q77t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taxi-02"} {...others} />);
}

export default Component;
