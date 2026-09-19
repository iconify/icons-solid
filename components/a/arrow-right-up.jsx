import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py8pa3bbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="py8pa3bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:arrow-right-up"} {...others} />);
}

export default Component;
