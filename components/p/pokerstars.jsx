import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnqx-61mq.css';

const viewBox = {"width":15.98,"height":18.229,"left":-1.663,"top":-1.663};
const content = `<path class="rnqx-61mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pokerstars"} {...others} />);
}

export default Component;
