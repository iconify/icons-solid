import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn8mjogke.css';
import '../../css/m/mxv0-rl9y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gn8mjogke"/><path class="mxv0-rl9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-red-hat-ansible"} {...others} />);
}

export default Component;
