import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6t120hgc.css';
import '../../css/b/b-cut7-tv.css';
import '../../css/i/iqqj1-bco.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6t120hgc"/><path class="b-cut7-tv"/><path class="iqqj1-bco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-copy-20-bold"} {...others} />);
}

export default Component;
