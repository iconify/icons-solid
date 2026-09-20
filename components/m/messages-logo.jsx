import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wt2kmxbol.css';
import '../../css/m/m60tiqg8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wt2kmxbol"/><path class="m60tiqg8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:messages-logo"} {...others} />);
}

export default Component;
