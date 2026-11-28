import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyj2c0vnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qyj2c0vnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:filter-x"} {...others} />);
}

export default Component;
