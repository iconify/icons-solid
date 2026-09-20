import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpzg3ybjx.css';
import '../../css/q/qvb9z6b-w.css';
import '../../css/i/i5_-be20c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpzg3ybjx"/><path class="qvb9z6b-w"/><path class="i5_-be20c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:composition-16-to-9"} {...others} />);
}

export default Component;
