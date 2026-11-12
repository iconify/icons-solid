import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imvewngax.css';
import '../../css/h/hexr8-bsz.css';
import '../../css/n/nadauofsf.css';
import '../../css/y/y--w-mb1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="imvewngax"/><path class="hexr8-bsz"/><path class="nadauofsf"/><path class="y--w-mb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homescreen-hero-light"} {...others} />);
}

export default Component;
