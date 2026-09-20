import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3rfekbkz.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="k3rfekbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:small-craft-advisory"} {...others} />);
}

export default Component;
