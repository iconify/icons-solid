import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp-_2jb1a.css';
import '../../css/b/b2zcb_1uj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pp-_2jb1a"/><path class="b2zcb_1uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-plus-48"} {...others} />);
}

export default Component;
