import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/n/nfur3zcqu.css';
import '../../css/m/mc8e9zh3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t8a26skit"/><path class="nfur3zcqu"/><path class="mc8e9zh3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:view-square"} {...others} />);
}

export default Component;
