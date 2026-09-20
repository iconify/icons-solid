import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nub6h3bjf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="nub6h3bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:celsius-solid"} {...others} />);
}

export default Component;
