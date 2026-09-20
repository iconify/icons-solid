import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1dnfsbtv.css';
import '../../css/x/xvzet0dgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1dnfsbtv"/><path class="xvzet0dgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:filter-square-fill"} {...others} />);
}

export default Component;
