import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjrlzybmw.css';

const viewBox = {"width":2048,"height":1280};
const content = `<path class="wjrlzybmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:skyatlas"} {...others} />);
}

export default Component;
