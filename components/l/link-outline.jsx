import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln1f_4blw.css';
import '../../css/o/o1li7xbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln1f_4blw"/><path class="o1li7xbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-outline"} {...others} />);
}

export default Component;
