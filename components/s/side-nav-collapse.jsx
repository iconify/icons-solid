import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nskmalzgz.css';
import '../../css/v/v97u7ccna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nskmalzgz"/><path class="v97u7ccna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:side-nav-collapse"} {...others} />);
}

export default Component;
