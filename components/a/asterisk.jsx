import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsmb_fmnb.css';

const viewBox = {"width":1026,"height":1024};
const content = `<path class="hsmb_fmnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:asterisk"} {...others} />);
}

export default Component;
