import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2c56nb3p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g2c56nb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:electrical-curved-circuit-breaker-and-bolt"} {...others} />);
}

export default Component;
