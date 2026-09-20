import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f01lhjzea.css';
import '../../css/k/k2jkwyg1s.css';
import '../../css/n/n7it1melf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f01lhjzea"/><path clip-rule="evenodd" class="k2jkwyg1s"/><path class="n7it1melf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:object-scan-filled"} {...others} />);
}

export default Component;
