import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qscg1vb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qscg1vb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:up-left-arrow"} {...others} />);
}

export default Component;
