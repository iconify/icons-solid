import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix6zhthqk.css';
import '../../css/g/go6cwxbcy.css';
import '../../css/x/x4bew356d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ix6zhthqk"/><path clip-rule="evenodd" class="go6cwxbcy"/><path clip-rule="evenodd" class="x4bew356d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:search-dollar-flat"} {...others} />);
}

export default Component;
