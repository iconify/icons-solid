import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkohjf76e.css';
import '../../css/i/it25zdp1p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kkohjf76e"/><path class="it25zdp1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:passenger-drinks"} {...others} />);
}

export default Component;
