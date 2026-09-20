import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dly_-rv9j.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dly_-rv9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:key-solid"} {...others} />);
}

export default Component;
