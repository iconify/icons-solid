import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0la11bfe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c0la11bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bear-spray-can-with-spray-and-ruble"} {...others} />);
}

export default Component;
