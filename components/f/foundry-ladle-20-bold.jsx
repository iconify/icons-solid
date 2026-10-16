import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebt602b4h.css';
import '../../css/n/n_bvk3qzv.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ebt602b4h"/><path class="n_bvk3qzv"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:foundry-ladle-20-bold"} {...others} />);
}

export default Component;
