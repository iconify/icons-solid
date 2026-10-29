import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kyj714bbb.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/n/naeb0abdw.css';
import '../../css/c/clf7bkh7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kyj714bbb"/><path class="qr4ochb5c wm-s"/><path class="naeb0abdw"/><path class="clf7bkh7f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-off-duo"} {...others} />);
}

export default Component;
