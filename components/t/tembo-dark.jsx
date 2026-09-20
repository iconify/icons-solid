import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd5_iibfn.css';

const viewBox = {"width":153,"height":152};
const content = `<path clip-rule="evenodd" class="fd5_iibfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tembo-dark"} {...others} />);
}

export default Component;
