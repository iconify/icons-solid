import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jerixg-mq.css';
import '../../css/x/x-sfqoban.css';
import '../../css/d/d46zpdbjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jerixg-mq"/><path class="x-sfqoban"/><path class="d46zpdbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-dark"} {...others} />);
}

export default Component;
