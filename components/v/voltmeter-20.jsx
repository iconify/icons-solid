import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8zyk_juu.css';
import '../../css/b/bhtgracju.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e8zyk_juu"/><path class="bhtgracju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltmeter-20"} {...others} />);
}

export default Component;
