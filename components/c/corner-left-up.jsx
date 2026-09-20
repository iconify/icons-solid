import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqx0khpxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqx0khpxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:corner-left-up"} {...others} />);
}

export default Component;
