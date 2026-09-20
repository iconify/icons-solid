import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjf7a61ga.css';
import '../../css/n/n-mc4deaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sjf7a61ga"/><path class="n-mc4deaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aviato-dark"} {...others} />);
}

export default Component;
