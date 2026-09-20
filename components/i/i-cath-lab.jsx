import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwigj8bqa.css';
import '../../css/f/fvz0x3bpb.css';
import '../../css/z/zg0gl4b4g.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="dwigj8bqa"/><path class="fvz0x3bpb"/><path class="zg0gl4b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-cath-lab"} {...others} />);
}

export default Component;
