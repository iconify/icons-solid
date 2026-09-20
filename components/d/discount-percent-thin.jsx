import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq5kcq0eh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cq5kcq0eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:discount-percent-thin"} {...others} />);
}

export default Component;
