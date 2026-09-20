import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv4lvww3m.css';
import '../../css/p/pug9g9bnq.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="iv4lvww3m"/><path class="pug9g9bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rhasspy"} {...others} />);
}

export default Component;
