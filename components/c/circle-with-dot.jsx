import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdtnx0blw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wdtnx0blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:circle-with-dot"} {...others} />);
}

export default Component;
