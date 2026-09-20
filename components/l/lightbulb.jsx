import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k90sxq3fv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="k90sxq3fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:lightbulb"} {...others} />);
}

export default Component;
