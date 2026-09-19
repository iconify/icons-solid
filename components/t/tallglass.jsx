import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hczb_fq6b.css';

const viewBox = {"width":512,"height":1024};
const content = `<path class="hczb_fq6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:tallglass"} {...others} />);
}

export default Component;
