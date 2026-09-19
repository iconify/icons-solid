import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o26-jtsst.css';
import '../../css/z/zk0i3d1nf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o26-jtsst"/><path class="zk0i3d1nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contracts"} {...others} />);
}

export default Component;
