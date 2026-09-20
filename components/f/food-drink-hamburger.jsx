import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akdc04zlf.css';
import '../../css/a/asob6ykds.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="akdc04zlf"/><path class="asob6ykds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-hamburger"} {...others} />);
}

export default Component;
