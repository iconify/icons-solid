import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8e86bczb.css';
import '../../css/l/lbjnpubsy.css';
import '../../css/y/yl21lvbmd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q8e86bczb"/><path class="lbjnpubsy"/><path class="yl21lvbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-basket"} {...others} />);
}

export default Component;
