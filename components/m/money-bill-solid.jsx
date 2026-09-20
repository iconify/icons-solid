import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzph24bzd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fzph24bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:money-bill-solid"} {...others} />);
}

export default Component;
