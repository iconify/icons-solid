import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0qt-cc0g.css';

const viewBox = {"width":2176,"height":1792};
const content = `<path class="d0qt-cc0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:balance-scale"} {...others} />);
}

export default Component;
