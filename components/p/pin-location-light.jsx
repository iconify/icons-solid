import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqlbbubhn.css';
import '../../css/n/ngbp4qb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqlbbubhn"/><path class="ngbp4qb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pin-location-light"} {...others} />);
}

export default Component;
