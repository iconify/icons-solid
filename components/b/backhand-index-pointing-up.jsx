import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnv4d6brh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pnv4d6brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:backhand-index-pointing-up"} {...others} />);
}

export default Component;
