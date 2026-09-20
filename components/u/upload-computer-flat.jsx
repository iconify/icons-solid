import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nj8-f164m.css';
import '../../css/o/otzeqlbfy.css';
import '../../css/z/z90o2kbpb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nj8-f164m"/><path clip-rule="evenodd" class="otzeqlbfy"/><path class="z90o2kbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:upload-computer-flat"} {...others} />);
}

export default Component;
