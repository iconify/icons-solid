import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkh-90byk.css';
import '../../css/x/x-e0pwbux.css';
import '../../css/s/s20085b2u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wkh-90byk"/><path class="x-e0pwbux"/><path class="s20085b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-cursor-48-bold"} {...others} />);
}

export default Component;
