import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi-ue2tqy.css';
import '../../css/m/mo_rg4g7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bi-ue2tqy"/><path class="mo_rg4g7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:prq"} {...others} />);
}

export default Component;
