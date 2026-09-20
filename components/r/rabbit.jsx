import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k6if4kh4a.css';
import '../../css/j/jkl-rmw7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k6if4kh4a"/><path class="jkl-rmw7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:rabbit"} {...others} />);
}

export default Component;
