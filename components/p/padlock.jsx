import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8cc9ke3i.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="u8cc9ke3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:padlock"} {...others} />);
}

export default Component;
