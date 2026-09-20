import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/x/x6dwuo.css';
import '../../css/a/ahcaho.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-50.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew x6dwuo"/><path class="ahcaho iw1iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:laptop-twotone"} {...others} />);
}

export default Component;
