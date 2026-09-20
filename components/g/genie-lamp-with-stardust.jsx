import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr_ri1bdf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rr_ri1bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:genie-lamp-with-stardust"} {...others} />);
}

export default Component;
