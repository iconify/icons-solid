import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1e7ksb2s.css';
import '../../css/r/r2xn4m3wh.css';
import '../../css/y/yq64yzyqx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c1e7ksb2s"/><path class="r2xn4m3wh"/><circle class="yq64yzyqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rurdesk"} {...others} />);
}

export default Component;
