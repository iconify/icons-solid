import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnk6u5eey.css';
import '../../css/s/sd_7wj8_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nnk6u5eey"/><path class="sd_7wj8_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:twig"} {...others} />);
}

export default Component;
