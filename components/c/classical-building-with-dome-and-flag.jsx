import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwyxdm3le.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hwyxdm3le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:classical-building-with-dome-and-flag"} {...others} />);
}

export default Component;
