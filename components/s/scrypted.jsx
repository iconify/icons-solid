import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a21bjysuj.css';
import '../../css/t/tm-9qcpcq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a21bjysuj"/><path class="tm-9qcpcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scrypted"} {...others} />);
}

export default Component;
