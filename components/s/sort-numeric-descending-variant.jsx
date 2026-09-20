import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6ln_hbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6ln_hbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sort-numeric-descending-variant"} {...others} />);
}

export default Component;
