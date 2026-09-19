import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olzgs6svr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="olzgs6svr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:dropdown"} {...others} />);
}

export default Component;
