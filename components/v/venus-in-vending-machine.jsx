import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp18n-bsn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jp18n-bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:venus-in-vending-machine"} {...others} />);
}

export default Component;
