import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grf4dx6ip.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="grf4dx6ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:ferry"} {...others} />);
}

export default Component;
