import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7mdh3bqy.css';
import '../../css/q/qvisowbeh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i7mdh3bqy"/><path class="qvisowbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:copy"} {...others} />);
}

export default Component;
