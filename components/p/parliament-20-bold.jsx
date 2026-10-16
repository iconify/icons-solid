import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkzmacc8l.css';
import '../../css/a/a4qgedb8h.css';
import '../../css/t/ta45wzagz.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xkzmacc8l"/><path class="a4qgedb8h"/><path class="ta45wzagz"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parliament-20-bold"} {...others} />);
}

export default Component;
