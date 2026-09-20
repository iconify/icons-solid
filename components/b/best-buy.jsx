import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka56i2i7o.css';
import '../../css/p/ppaop13hw.css';
import '../../css/f/f0-nx3ual.css';

const viewBox = {"width":1000,"height":584.485};
const content = `<path class="ka56i2i7o"/><path class="ppaop13hw"/><path class="f0-nx3ual"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:best-buy"} {...others} />);
}

export default Component;
