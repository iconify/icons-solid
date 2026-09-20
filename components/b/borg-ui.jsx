import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb4fn93xo.css';
import '../../css/u/u82ou6akr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wb4fn93xo"/><path class="u82ou6akr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:borg-ui"} {...others} />);
}

export default Component;
