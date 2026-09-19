import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdhhz2seu.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="kdhhz2seu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:disabled"} {...others} />);
}

export default Component;
