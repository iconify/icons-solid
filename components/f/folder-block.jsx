import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kffm874mq.css';
import '../../css/o/ovx852b5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kffm874mq"/><path class="ovx852b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-block"} {...others} />);
}

export default Component;
