import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl17irjlu.css';
import '../../css/f/fjge1xbtn.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="xl17irjlu"/><path class="fjge1xbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulsarr"} {...others} />);
}

export default Component;
