import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szva8fs1o.css';
import '../../css/f/fgpw0_ztz.css';
import '../../css/n/n75s5g__s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="szva8fs1o"/><path class="fgpw0_ztz"/><path class="n75s5g__s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sleet-20"} {...others} />);
}

export default Component;
