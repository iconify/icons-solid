import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpw5bfokz.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="jpw5bfokz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cc-discover"} {...others} />);
}

export default Component;
