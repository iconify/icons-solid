import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm6vyv7bn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm6vyv7bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:feature-search-outline"} {...others} />);
}

export default Component;
