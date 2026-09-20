import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh1auqbgw.css';
import '../../css/u/uguz_8b8z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hh1auqbgw"/><path class="uguz_8b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:monica"} {...others} />);
}

export default Component;
