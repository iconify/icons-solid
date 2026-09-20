import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvqxaqb1c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rvqxaqb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-top-alternate-1-flip-top-object-work"} {...others} />);
}

export default Component;
