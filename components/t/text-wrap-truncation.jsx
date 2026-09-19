import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slqipu8ji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="slqipu8ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:text-wrap-truncation"} {...others} />);
}

export default Component;
