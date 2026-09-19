import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwmnbk0gi.css';

const viewBox = {"width":2304,"height":1792};
const content = `<path class="xwmnbk0gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:object-ungroup"} {...others} />);
}

export default Component;
