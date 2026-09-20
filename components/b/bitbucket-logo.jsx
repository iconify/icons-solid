import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r22aizbfa.css';
import '../../css/s/s_isis4tn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="r22aizbfa"/><path class="s_isis4tn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bitbucket-logo"} {...others} />);
}

export default Component;
