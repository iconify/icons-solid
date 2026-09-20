import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p25m-zfzg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p25m-zfzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:electric-cord-1-solid"} {...others} />);
}

export default Component;
