import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyi7gccyf.css';
import '../../css/u/u86mi1b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyi7gccyf"/><path class="u86mi1b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:youtube"} {...others} />);
}

export default Component;
