import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8kqwv81x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c8kqwv81x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rectangle-small"} {...others} />);
}

export default Component;
