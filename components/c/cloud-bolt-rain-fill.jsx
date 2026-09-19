import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9ui875ne.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="k9ui875ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:cloud-bolt-rain-fill"} {...others} />);
}

export default Component;
