import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srcpcbb9j.css';

const viewBox = {"width":304,"height":448};
const content = `<path class="srcpcbb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:arrow-up"} {...others} />);
}

export default Component;
