import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwi1r-0my.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nwi1r-0my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-navbar-inactive"} {...others} />);
}

export default Component;
