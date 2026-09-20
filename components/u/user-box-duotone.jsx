import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjiz8hbrl.css';
import '../../css/h/hana-fm8g.css';
import '../../css/w/w6h6ugqaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjiz8hbrl"/><circle class="hana-fm8g"/><path clip-rule="evenodd" class="w6h6ugqaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-box-duotone"} {...others} />);
}

export default Component;
