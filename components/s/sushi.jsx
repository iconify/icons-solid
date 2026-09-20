import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xk-xwp3yf.css';
import '../../css/k/kzeg54b4h.css';
import '../../css/d/dbde4mbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="xk-xwp3yf"/><rect class="kzeg54b4h"/><path class="dbde4mbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:sushi"} {...others} />);
}

export default Component;
