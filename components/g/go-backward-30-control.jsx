import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vewg_bt9s.css';
import '../../css/e/esx638byl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vewg_bt9s"/><path class="esx638byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:go-backward-30-control"} {...others} />);
}

export default Component;
