import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6xfrmbct.css';
import '../../css/u/u4aylz3fv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6xfrmbct"/><path class="u4aylz3fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-apps-browser-bold"} {...others} />);
}

export default Component;
