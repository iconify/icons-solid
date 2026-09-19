import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zos5uc49n.css';
import '../../css/b/bglxpfbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zos5uc49n"/><path class="bglxpfbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lock-password"} {...others} />);
}

export default Component;
