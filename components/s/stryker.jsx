import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcwz-8byp.css';
import '../../css/j/jz_z96ofw.css';
import '../../css/h/hx1pgx08q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="wcwz-8byp"><path class="jz_z96ofw"/><path class="hx1pgx08q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:stryker"} {...others} />);
}

export default Component;
