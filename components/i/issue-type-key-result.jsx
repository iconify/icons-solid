import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr1ubj--e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qr1ubj--e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:issue-type-key-result"} {...others} />);
}

export default Component;
