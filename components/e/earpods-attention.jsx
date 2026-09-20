import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duc0gu69f.css';
import '../../css/n/nu3pb0b1k.css';
import '../../css/c/c_9j593lb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duc0gu69f"/><path class="nu3pb0b1k"/><path class="c_9j593lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:earpods-attention"} {...others} />);
}

export default Component;
