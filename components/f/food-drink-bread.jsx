import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud_o9x3-n.css';
import '../../css/w/wbdo44kuk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ud_o9x3-n"/><path class="wbdo44kuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-bread"} {...others} />);
}

export default Component;
