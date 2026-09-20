import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awzz3-b6o.css';
import '../../css/u/u9qilne9i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="awzz3-b6o"/><path class="u9qilne9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:add-bell-notification"} {...others} />);
}

export default Component;
