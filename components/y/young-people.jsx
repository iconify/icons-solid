import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n47ky7pon.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="n47ky7pon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:young-people"} {...others} />);
}

export default Component;
