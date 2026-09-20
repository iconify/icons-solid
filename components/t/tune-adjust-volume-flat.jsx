import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0rps9g9q.css';
import '../../css/h/h4-ochb-m.css';
import '../../css/s/st8u5pbuo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c0rps9g9q"/><path clip-rule="evenodd" class="h4-ochb-m"/><path clip-rule="evenodd" class="st8u5pbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tune-adjust-volume-flat"} {...others} />);
}

export default Component;
