import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xh4k0frjg.css';
import '../../css/z/z1klt6laq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="xh4k0frjg"/><path class="z1klt6laq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-search-02"} {...others} />);
}

export default Component;
