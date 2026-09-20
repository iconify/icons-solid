import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwo3tnbzy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zwo3tnbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:lock-closed-solid"} {...others} />);
}

export default Component;
