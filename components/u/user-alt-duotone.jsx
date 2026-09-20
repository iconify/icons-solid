import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf1wx9bka.css';
import '../../css/r/r29erebio.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="pf1wx9bka"/><path class="r29erebio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-alt-duotone"} {...others} />);
}

export default Component;
