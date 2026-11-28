import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovpm-ut7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovpm-ut7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:watering-can-check"} {...others} />);
}

export default Component;
