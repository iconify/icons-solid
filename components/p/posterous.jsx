import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdoxu0bip.css';

const viewBox = {"width":320,"height":488};
const content = `<path class="jdoxu0bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:posterous"} {...others} />);
}

export default Component;
