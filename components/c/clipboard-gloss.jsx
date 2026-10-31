import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp1ok0bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qp1ok0bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-gloss"} {...others} />);
}

export default Component;
