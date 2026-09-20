import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af5zxacjf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="af5zxacjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:color-swatches-solid"} {...others} />);
}

export default Component;
