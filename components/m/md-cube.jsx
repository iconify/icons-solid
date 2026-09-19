import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjnbpgbsn.css';
import '../../css/f/fd5cwebhy.css';
import '../../css/h/h5uul4bth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pjnbpgbsn"/><path class="fd5cwebhy"/><path class="h5uul4bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-cube"} {...others} />);
}

export default Component;
