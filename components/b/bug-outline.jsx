import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcn2ntb-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zcn2ntb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bug-outline"} {...others} />);
}

export default Component;
