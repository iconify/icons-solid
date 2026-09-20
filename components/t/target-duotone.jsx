import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9m23kb1m.css';
import '../../css/s/sz3jedbeq.css';
import '../../css/x/x_4guwbps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9m23kb1m"/><path class="sz3jedbeq"/><path class="x_4guwbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:target-duotone"} {...others} />);
}

export default Component;
