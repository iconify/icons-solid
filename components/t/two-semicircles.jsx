import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/burs33b6m.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="burs33b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:two-semicircles"} {...others} />);
}

export default Component;
