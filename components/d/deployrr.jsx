import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czy80m__f.css';
import '../../css/o/o94urebay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="czy80m__f"/><path class="o94urebay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:deployrr"} {...others} />);
}

export default Component;
