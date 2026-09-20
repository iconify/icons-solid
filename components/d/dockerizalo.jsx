import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgkqhtgri.css';
import '../../css/b/b7__w3xsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lgkqhtgri"/><path class="b7__w3xsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockerizalo"} {...others} />);
}

export default Component;
