import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3tf0vicg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n3tf0vicg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:stairs-descend"} {...others} />);
}

export default Component;
