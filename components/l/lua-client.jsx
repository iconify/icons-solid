import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9sroks9g.css';
import '../../css/s/s4lttrqws.css';
import '../../css/w/wzn6zhbvq.css';
import '../../css/t/tu54racff.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k9sroks9g"/><g class="s4lttrqws"><path class="wzn6zhbvq"/><path class="tu54racff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lua-client"} {...others} />);
}

export default Component;
