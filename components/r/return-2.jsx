import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/p/p_jaxhbai.css';
import '../../css/r/r8xag6bqx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="p_jaxhbai"/><path class="r8xag6bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:return-2"} {...others} />);
}

export default Component;
