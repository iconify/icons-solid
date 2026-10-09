import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-pqieb8m.css';
import '../../css/h/hijw9tg6y.css';
import '../../css/m/mmgcubc1u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v-pqieb8m"/><path class="hijw9tg6y"/><path class="mmgcubc1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whale-20-bold"} {...others} />);
}

export default Component;
