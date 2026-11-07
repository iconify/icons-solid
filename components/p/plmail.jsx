import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9jpdwaln.css';
import '../../css/s/s90wc0pdg.css';
import '../../css/t/t2-4x2q-z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b9jpdwaln"/><path class="s90wc0pdg"/><path class="t2-4x2q-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plmail"} {...others} />);
}

export default Component;
