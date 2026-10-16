import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2m65bbab.css';
import '../../css/u/uza837t1m.css';
import '../../css/a/an5pwtbkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f2m65bbab"/><path class="uza837t1m"/><path class="an5pwtbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-outgoing-20"} {...others} />);
}

export default Component;
