import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7261t-ji.css';
import '../../css/u/u_h0ofbbp.css';
import '../../css/w/w96h6ywld.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n7261t-ji"/><path class="u_h0ofbbp"/><path class="w96h6ywld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:f-droid-dark"} {...others} />);
}

export default Component;
