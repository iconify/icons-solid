import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od77xio2s.css';
import '../../css/i/i088brsje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="od77xio2s"/><path class="i088brsje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sidekiq"} {...others} />);
}

export default Component;
