import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olsgh7b-c.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="olsgh7b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:twitter"} {...others} />);
}

export default Component;
