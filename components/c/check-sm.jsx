import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nml4g8bfm.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="nml4g8bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:check-sm"} {...others} />);
}

export default Component;
