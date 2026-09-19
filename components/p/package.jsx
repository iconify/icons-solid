import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc9l-bcsn.css';
import '../../css/b/b16rfrbit.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qc9l-bcsn"/><path class="b16rfrbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:package"} {...others} />);
}

export default Component;
