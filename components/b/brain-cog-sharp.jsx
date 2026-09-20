import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuw5yubgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xuw5yubgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brain-cog-sharp"} {...others} />);
}

export default Component;
