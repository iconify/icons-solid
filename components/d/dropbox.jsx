import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swzqjaccb.css';

const viewBox = {"width":682,"height":694};
const content = `<path class="swzqjaccb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:dropbox"} {...others} />);
}

export default Component;
