import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbvvl1bla.css';
import '../../css/t/thpm74blf.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wbvvl1bla"/><path class="thpm74blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:atlas-network"} {...others} />);
}

export default Component;
