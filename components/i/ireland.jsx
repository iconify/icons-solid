import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9cl-boot.css';
import '../../css/r/rltssxbuj.css';
import '../../css/g/g323dnkch.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="l9cl-boot"/><path class="rltssxbuj"/><path class="g323dnkch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:ireland"} {...others} />);
}

export default Component;
