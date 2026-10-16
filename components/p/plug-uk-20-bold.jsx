import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs3jkhbrx.css';
import '../../css/p/paodlxbin.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bs3jkhbrx"/><path class="paodlxbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-uk-20-bold"} {...others} />);
}

export default Component;
