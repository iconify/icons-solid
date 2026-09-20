import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpzo9b7op.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kpzo9b7op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:humidity-none"} {...others} />);
}

export default Component;
