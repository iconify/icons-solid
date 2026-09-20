import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-gcgd2xz.css';
import '../../css/s/sqh5tg87y.css';
import '../../css/v/vz_uafqcp.css';

const viewBox = {"width":50,"height":50};
const content = `<g transform="translate(.21 -247.01)"><circle class="b-gcgd2xz"/><circle class="sqh5tg87y"/><circle class="vz_uafqcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:julia"} {...others} />);
}

export default Component;
