import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8j6n9b-r.css';
import '../../css/e/eh9_3rc2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h8j6n9b-r"/><path class="eh9_3rc2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:mic"} {...others} />);
}

export default Component;
