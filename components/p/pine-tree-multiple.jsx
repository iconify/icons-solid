import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulk_7v2hz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulk_7v2hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pine-tree-multiple"} {...others} />);
}

export default Component;
