import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkfscribz.css';
import '../../css/e/epuqqhiuz.css';
import '../../css/b/bis6shb4l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kkfscribz"/><path class="epuqqhiuz"/><path class="bis6shb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sun-stroke-20"} {...others} />);
}

export default Component;
