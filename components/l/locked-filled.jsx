import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep54zkxas.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="ep54zkxas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:locked-filled"} {...others} />);
}

export default Component;
