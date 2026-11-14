import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kffm874mq.css';
import '../../css/s/szb0icc9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kffm874mq"/><path class="szb0icc9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-file-storage"} {...others} />);
}

export default Component;
