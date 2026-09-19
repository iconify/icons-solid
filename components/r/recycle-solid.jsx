import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho0mqcbev.css';
import '../../css/g/gnewu523m.css';
import '../../css/q/qu12fqbgs.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 ho0mqcbev"/><path class="clr-i-solid clr-i-solid-path-2 gnewu523m"/><path class="clr-i-solid clr-i-solid-path-3 qu12fqbgs"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:recycle-solid"} {...others} />);
}

export default Component;
