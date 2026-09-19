import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0ya0vb5b.css';
import '../../css/e/enivfjbio.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0ya0vb5b"/><path class="enivfjbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-angular-outline"} {...others} />);
}

export default Component;
