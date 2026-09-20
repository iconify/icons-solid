import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drgj1zbmh.css';
import '../../css/u/u4xg-pbxo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="drgj1zbmh"/><path class="u4xg-pbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:bulb3"} {...others} />);
}

export default Component;
