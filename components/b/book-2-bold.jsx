import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5ica_b2j.css';
import '../../css/i/irrkctldn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w5ica_b2j"/><path class="irrkctldn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-2-bold"} {...others} />);
}

export default Component;
