import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/j/jp4_2-bik.css';
import '../../css/c/cj7tbsppw.css';
import '../../css/n/nku3rxxks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="jp4_2-bik"/><path class="cj7tbsppw"/><path class="nku3rxxks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:synchronize-find-search"} {...others} />);
}

export default Component;
