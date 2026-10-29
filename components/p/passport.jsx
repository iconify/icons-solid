import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dojiukb8c.css';
import '../../css/u/u1_hubbvw.css';
import '../../css/w/wk2zli15y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dojiukb8c wm-k"/><path class="u1_hubbvw wm-a"/><path class="wk2zli15y wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:passport"} {...others} />);
}

export default Component;
