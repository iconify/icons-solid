import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp7nxbb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mp7nxbb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-uturn-right-solid"} {...others} />);
}

export default Component;
