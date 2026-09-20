import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl13osb8t.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="dl13osb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-horizontal-menu-left"} {...others} />);
}

export default Component;
