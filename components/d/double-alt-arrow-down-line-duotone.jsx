import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zen1fdcpk.css';
import '../../css/n/nhx5qezis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zen1fdcpk"/><path class="nhx5qezis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-down-line-duotone"} {...others} />);
}

export default Component;
