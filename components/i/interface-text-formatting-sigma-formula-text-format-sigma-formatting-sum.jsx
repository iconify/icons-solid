import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no5zah91j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="no5zah91j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-sigma-formula-text-format-sigma-formatting-sum"} {...others} />);
}

export default Component;
