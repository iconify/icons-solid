import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzuyn0bdu.css';
import '../../css/e/exf1ewb5k.css';
import '../../css/x/xwlosd37j.css';
import '../../css/g/ghpbfocyg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gzuyn0bdu"/><path class="exf1ewb5k"/><path class="xwlosd37j"/><path class="ghpbfocyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supercapacitor-20-bold"} {...others} />);
}

export default Component;
