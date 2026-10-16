import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7445dbmo.css';
import '../../css/c/c9yqj13fx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g7445dbmo"/><path class="c9yqj13fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-tester-48"} {...others} />);
}

export default Component;
