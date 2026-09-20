import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpb_-2b7f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rpb_-2b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:inventree-light"} {...others} />);
}

export default Component;
