import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss_8qxzuj.css';
import '../../css/o/od1iqpboh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ss_8qxzuj"/><path class="od1iqpboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:outline"} {...others} />);
}

export default Component;
