import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii1sy95ok.css';
import '../../css/n/npymy_hkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ii1sy95ok"/><path class="npymy_hkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-bold-duotone"} {...others} />);
}

export default Component;
