import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skbbg-s7m.css';
import '../../css/x/xhvfopblx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skbbg-s7m"/><path class="xhvfopblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-exclamation-light"} {...others} />);
}

export default Component;
