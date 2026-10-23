import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqeizzbud.css';
import '../../css/r/r4fkn_b7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pqeizzbud"/><path class="r4fkn_b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-house-filled"} {...others} />);
}

export default Component;
