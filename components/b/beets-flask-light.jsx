import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9hmh0b9g.css';
import '../../css/u/ujufagbba.css';
import '../../css/s/s8i3jsm2k.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="f9hmh0b9g"/><path class="ujufagbba"/><path class="s8i3jsm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beets-flask-light"} {...others} />);
}

export default Component;
