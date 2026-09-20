import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plk8nejnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plk8nejnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chart-down"} {...others} />);
}

export default Component;
