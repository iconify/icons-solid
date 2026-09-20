import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnxfqpbmo.css';
import '../../css/r/rv1y__2ie.css';
import '../../css/u/uoqs5ac6i.css';
import '../../css/d/d6-s8fbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fnxfqpbmo"/><path clip-rule="evenodd" class="rv1y__2ie"/><path class="uoqs5ac6i"/><path class="d6-s8fbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:chain"} {...others} />);
}

export default Component;
