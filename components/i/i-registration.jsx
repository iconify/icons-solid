import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg9i9abcg.css';
import '../../css/u/u_kzc3htk.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vg9i9abcg"/><path class="u_kzc3htk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-registration"} {...others} />);
}

export default Component;
