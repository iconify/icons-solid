import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc9ys4ivd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wc9ys4ivd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:notebook-and-pen"} {...others} />);
}

export default Component;
