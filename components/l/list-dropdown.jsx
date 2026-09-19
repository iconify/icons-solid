import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhomschgd.css';
import '../../css/m/mz1wsz5pm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jhomschgd"/><path class="mz1wsz5pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:list-dropdown"} {...others} />);
}

export default Component;
