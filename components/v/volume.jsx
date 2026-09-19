import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug90t0lcu.css';
import '../../css/v/v783iab8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ug90t0lcu"/><circle class="v783iab8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:volume"} {...others} />);
}

export default Component;
