import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu7q4ib2g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eu7q4ib2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-box-gabled-building-with-window"} {...others} />);
}

export default Component;
