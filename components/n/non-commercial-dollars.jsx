import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/o/oli0o5buy.css';
import '../../css/g/gufbzbcop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="oli0o5buy"/><path class="gufbzbcop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:non-commercial-dollars"} {...others} />);
}

export default Component;
