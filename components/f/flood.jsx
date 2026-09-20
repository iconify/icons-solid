import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w01qysb_c.css';
import '../../css/c/c2wp6ritf.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w01qysb_c"/><path class="c2wp6ritf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flood"} {...others} />);
}

export default Component;
