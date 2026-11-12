import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg0ripb9u.css';
import '../../css/p/p796kerln.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hg0ripb9u"/><path class="p796kerln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:american-eagle"} {...others} />);
}

export default Component;
