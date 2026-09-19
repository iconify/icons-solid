import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9sroks9g.css';
import '../../css/s/s53vmbcgz.css';
import '../../css/r/rlosknbna.css';
import '../../css/k/kmezwrwcb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k9sroks9g"/><g class="s53vmbcgz"><path class="rlosknbna"/><path class="kmezwrwcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:luau-client"} {...others} />);
}

export default Component;
