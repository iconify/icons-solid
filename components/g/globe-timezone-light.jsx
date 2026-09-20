import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei6395-9p.css';
import '../../css/e/ekf9xwedv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ei6395-9p"/><path class="ekf9xwedv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:globe-timezone-light"} {...others} />);
}

export default Component;
