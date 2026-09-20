import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2x0_ablt.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="r2x0_ablt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:curly-brackets"} {...others} />);
}

export default Component;
