import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht_47xbnf.css';
import '../../css/l/l6a3o_b7p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ht_47xbnf"/><path class="l6a3o_b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:temperature-20-bold"} {...others} />);
}

export default Component;
