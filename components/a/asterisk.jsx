import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzu_e6veq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bzu_e6veq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:asterisk"} {...others} />);
}

export default Component;
