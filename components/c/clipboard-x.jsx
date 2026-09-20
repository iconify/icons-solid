import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5lpn11ei.css';
import '../../css/v/v2vcvmb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="s5lpn11ei"/><path class="v2vcvmb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-x"} {...others} />);
}

export default Component;
