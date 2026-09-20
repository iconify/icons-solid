import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-ed46g8a.css';
import '../../css/l/l7xst3nbo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g-ed46g8a"/><path class="l7xst3nbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:u-s-bank"} {...others} />);
}

export default Component;
