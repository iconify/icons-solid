import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfgx_pj9v.css';

const viewBox = {"width":960,"height":1024};
const content = `<path class="hfgx_pj9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:threed"} {...others} />);
}

export default Component;
