import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frctqbb1v.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="frctqbb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:bnter"} {...others} />);
}

export default Component;
