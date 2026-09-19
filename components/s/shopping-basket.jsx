import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw5lexb-j.css';
import '../../css/y/y4rdwmmfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw5lexb-j"/><path class="y4rdwmmfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:shopping-basket"} {...others} />);
}

export default Component;
