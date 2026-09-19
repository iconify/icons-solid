import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5nysbo_z.css';
import '../../css/n/nfn_d0zln.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r5nysbo_z"/><path class="nfn_d0zln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:cix"} {...others} />);
}

export default Component;
