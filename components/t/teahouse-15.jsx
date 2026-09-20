import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpd7kl_ln.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rpd7kl_ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:teahouse-15"} {...others} />);
}

export default Component;
