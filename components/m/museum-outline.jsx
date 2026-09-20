import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azgyuxb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azgyuxb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:museum-outline"} {...others} />);
}

export default Component;
