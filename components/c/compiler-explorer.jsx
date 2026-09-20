import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch0q1dbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ch0q1dbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:compiler-explorer"} {...others} />);
}

export default Component;
