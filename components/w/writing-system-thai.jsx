import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7w72dyhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7w72dyhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:writing-system-thai"} {...others} />);
}

export default Component;
