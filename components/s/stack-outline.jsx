import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep0mwlbaf.css';
import '../../css/d/dbadl8boc.css';
import '../../css/c/c8rmpnlva.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ep0mwlbaf"/><path class="dbadl8boc"/><path class="c8rmpnlva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:stack-outline"} {...others} />);
}

export default Component;
