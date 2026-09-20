import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyqq2zbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pyqq2zbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fuel-truck"} {...others} />);
}

export default Component;
