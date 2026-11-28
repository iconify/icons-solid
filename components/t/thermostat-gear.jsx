import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/potmh-1wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="potmh-1wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:thermostat-gear"} {...others} />);
}

export default Component;
