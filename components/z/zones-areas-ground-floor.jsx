import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_o_yvwyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_o_yvwyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:zones-areas-ground-floor"} {...others} />);
}

export default Component;
