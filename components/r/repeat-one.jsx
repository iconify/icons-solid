import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmov_dv6f.css';
import '../../css/x/xzk6xmbpp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kmov_dv6f"/><path class="xzk6xmbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:repeat-one"} {...others} />);
}

export default Component;
