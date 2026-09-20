import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6df3db1i.css';
import '../../css/b/bw7r1grov.css';
import '../../css/e/emsprcb7h.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="s6df3db1i"/><path class="bw7r1grov"/><path class="emsprcb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tautulli"} {...others} />);
}

export default Component;
