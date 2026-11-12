import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csj5fll6c.css';
import '../../css/y/y_bc29brb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="csj5fll6c"/><path class="y_bc29brb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wardrowbe-dark"} {...others} />);
}

export default Component;
