import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti6n5-brp.css';
import '../../css/x/xlhg_tibn.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="matrix(1.5 0 0 1.5 -23.858 -7.25)"><path class="ti6n5-brp"/><rect class="xlhg_tibn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:opencode-light"} {...others} />);
}

export default Component;
