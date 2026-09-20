import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v02mowbow.css';
import '../../css/c/c2nbybb8g.css';
import '../../css/x/xj22oqcto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v02mowbow"/><circle class="c2nbybb8g"/><rect class="xj22oqcto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rsshub"} {...others} />);
}

export default Component;
