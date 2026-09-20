import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfjex6bnk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gfjex6bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:exclamation-circle-outline"} {...others} />);
}

export default Component;
