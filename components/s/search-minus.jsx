import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uff8yccku.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="uff8yccku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:search-minus"} {...others} />);
}

export default Component;
