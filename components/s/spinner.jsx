import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw8dmrebl.css';

const viewBox = {"width":1664,"height":1728};
const content = `<path class="fw8dmrebl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:spinner"} {...others} />);
}

export default Component;
