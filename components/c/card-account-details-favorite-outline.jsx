import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh5ne9_xz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh5ne9_xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:card-account-details-favorite-outline"} {...others} />);
}

export default Component;
