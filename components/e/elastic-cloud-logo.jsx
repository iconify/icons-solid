import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rg8l00kqo.css';
import '../../css/j/jpiulsfdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rg8l00kqo"/><path class="jpiulsfdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:elastic-cloud-logo"} {...others} />);
}

export default Component;
