import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujj4-jdsj.css';
import '../../css/h/hbovmzbev.css';
import '../../css/u/uc21-y-ff.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ujj4-jdsj"/><path class="hbovmzbev"/><path class="uc21-y-ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nx-witness-dark"} {...others} />);
}

export default Component;
