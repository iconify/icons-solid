import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f11wjqhij.css';
import '../../css/o/oimetacyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f11wjqhij"/><path class="oimetacyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:discount-percent-bubble"} {...others} />);
}

export default Component;
