import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om1e7y6-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="om1e7y6-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:flag-alt"} {...others} />);
}

export default Component;
