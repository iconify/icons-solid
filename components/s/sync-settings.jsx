import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g34r42blo.css';
import '../../css/c/czru7nb1u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g34r42blo"/><path class="czru7nb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sync-settings"} {...others} />);
}

export default Component;
