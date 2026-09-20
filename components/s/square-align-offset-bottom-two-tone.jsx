import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1z4meb2q.css';
import '../../css/c/ce55umbip.css';
import '../../css/n/ngwwabc8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b1z4meb2q"/><path class="ce55umbip"/><path class="ngwwabc8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-align-offset-bottom-two-tone"} {...others} />);
}

export default Component;
