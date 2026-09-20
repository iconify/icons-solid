import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo4yz7b1j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lo4yz7b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:amount-up-filled"} {...others} />);
}

export default Component;
