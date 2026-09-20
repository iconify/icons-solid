import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt8wifbth.css';
import '../../css/k/kdpqefbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lt8wifbth"/><path class="kdpqefbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:creditcard-add-filled"} {...others} />);
}

export default Component;
