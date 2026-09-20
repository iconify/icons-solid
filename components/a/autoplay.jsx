import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq462eq0m.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="aq462eq0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:autoplay"} {...others} />);
}

export default Component;
