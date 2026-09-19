import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bshgn5bua.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="bshgn5bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:triangle"} {...others} />);
}

export default Component;
