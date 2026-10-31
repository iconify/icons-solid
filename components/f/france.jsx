import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9cl-boot.css';
import '../../css/v/v4iotl68y.css';
import '../../css/t/t2w8mls_d.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="l9cl-boot"/><path class="v4iotl68y"/><path class="t2w8mls_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:france"} {...others} />);
}

export default Component;
