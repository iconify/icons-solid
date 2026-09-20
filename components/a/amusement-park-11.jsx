import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p295tee_h.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="p295tee_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:amusement-park-11"} {...others} />);
}

export default Component;
