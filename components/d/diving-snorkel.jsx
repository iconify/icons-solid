import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj5uvlnzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj5uvlnzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:diving-snorkel"} {...others} />);
}

export default Component;
