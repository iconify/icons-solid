import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkr1zibwd.css';
import '../../css/p/pincndczi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkr1zibwd"/><path class="pincndczi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:trash-can-duotone"} {...others} />);
}

export default Component;
