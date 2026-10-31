import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9cl-boot.css';
import '../../css/a/apvpf298a.css';
import '../../css/b/bjo519b-f.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="l9cl-boot"/><path class="apvpf298a"/><path class="bjo519b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:italy"} {...others} />);
}

export default Component;
