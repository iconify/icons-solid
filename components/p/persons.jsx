import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo6q0qbpz.css';

const viewBox = {"width":26,"height":24};
const content = `<path class="xo6q0qbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:persons"} {...others} />);
}

export default Component;
