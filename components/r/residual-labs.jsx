import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm8avyyaa.css';

const viewBox = {"width":528.787,"height":593.926};
const content = `<path class="jm8avyyaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:residual-labs"} {...others} />);
}

export default Component;
