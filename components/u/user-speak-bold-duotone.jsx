import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0ga5b8fm.css';
import '../../css/n/neu-2wb2j.css';
import '../../css/t/twzcbexyu.css';
import '../../css/g/gl4r59b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0ga5b8fm"/><path class="neu-2wb2j"/><path class="twzcbexyu"/><path class="gl4r59b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-bold-duotone"} {...others} />);
}

export default Component;
