import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttn-_-n5x.css';

const viewBox = {"width":1932,"height":701};
const content = `<path class="ttn-_-n5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:sqale"} {...others} />);
}

export default Component;
