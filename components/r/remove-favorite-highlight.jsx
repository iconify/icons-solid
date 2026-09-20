import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/x3l-oob0d.css';
import '../../css/m/my09ilbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="x3l-oob0d"/><path class="my09ilbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:remove-favorite-highlight"} {...others} />);
}

export default Component;
