import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml6fninwt.css';
import '../../css/w/wlyltdbux.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ml6fninwt"/><path clip-rule="evenodd" class="wlyltdbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:simohamed-solid"} {...others} />);
}

export default Component;
