import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn_d-xbux.css';

const viewBox = {"width":621,"height":735};
const content = `<path class="pn_d-xbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:d-upper-case"} {...others} />);
}

export default Component;
