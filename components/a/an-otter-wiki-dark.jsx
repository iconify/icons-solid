import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-y-mccno.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e-y-mccno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:an-otter-wiki-dark"} {...others} />);
}

export default Component;
