import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl1cs6bwj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zl1cs6bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:water-glass-solid"} {...others} />);
}

export default Component;
