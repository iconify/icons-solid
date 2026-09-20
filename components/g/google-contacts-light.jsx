import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p64es6bla.css';
import '../../css/f/fx4qy8b3n.css';
import '../../css/w/we___fbjz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p64es6bla"/><path class="fx4qy8b3n"/><path class="we___fbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-contacts-light"} {...others} />);
}

export default Component;
