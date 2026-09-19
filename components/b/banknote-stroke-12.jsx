import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akpefz11w.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="akpefz11w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:banknote-stroke-12"} {...others} />);
}

export default Component;
