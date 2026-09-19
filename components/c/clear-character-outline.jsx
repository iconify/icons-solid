import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvn5f30vb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvn5f30vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:clear-character-outline"} {...others} />);
}

export default Component;
