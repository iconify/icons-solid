import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fthgilgrb.css';
import '../../css/y/yhd0eaczw.css';
import '../../css/z/z8wtxdbjb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fthgilgrb"/><path class="yhd0eaczw"/><path class="z8wtxdbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kamiyomu-dark"} {...others} />);
}

export default Component;
