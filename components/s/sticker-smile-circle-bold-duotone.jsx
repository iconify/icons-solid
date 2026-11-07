import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxlpx8b1j.css';
import '../../css/i/ibt_a3b5u.css';
import '../../css/x/x2yjolbgz.css';
import '../../css/u/ukoks6jxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uxlpx8b1j"/><path class="ibt_a3b5u"/><path class="x2yjolbgz"/><path class="ukoks6jxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-bold-duotone"} {...others} />);
}

export default Component;
