import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8bdnmttq.css';
import '../../css/v/v_shcmxcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a8bdnmttq"/><path class="v_shcmxcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posteria-dark"} {...others} />);
}

export default Component;
