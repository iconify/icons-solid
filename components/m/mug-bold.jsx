import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmcdlcbwt.css';
import '../../css/j/jyt8hmbvk.css';
import '../../css/g/g57wd6_qr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmcdlcbwt"/><path class="jyt8hmbvk"/><path class="g57wd6_qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-bold"} {...others} />);
}

export default Component;
