import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh4pq_8fd.css';
import '../../css/e/ebhrip5sz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer nh4pq_8fd"/><path class="duoicon-secondary-layer ebhrip5sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:android"} {...others} />);
}

export default Component;
