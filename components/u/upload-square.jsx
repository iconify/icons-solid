import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qhuyqe-cm.css';
import '../../css/z/zl4jutw-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qhuyqe-cm"/><path class="zl4jutw-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:upload-square"} {...others} />);
}

export default Component;
