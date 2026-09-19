import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8hgrvbws.css';
import '../../css/q/qagm_33vn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a8hgrvbws"/><path class="qagm_33vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bottles-container"} {...others} />);
}

export default Component;
