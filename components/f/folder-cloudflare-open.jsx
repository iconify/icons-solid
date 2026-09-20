import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilzbr0e0d.css';
import '../../css/d/d1ok1f99b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ilzbr0e0d"/><path class="d1ok1f99b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cloudflare-open"} {...others} />);
}

export default Component;
