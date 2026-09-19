import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y05ccfbwe.css';

const viewBox = {"width":1792,"height":1376};
const content = `<path class="y05ccfbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:exchange"} {...others} />);
}

export default Component;
