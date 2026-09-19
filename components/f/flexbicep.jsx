import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsuy7qb9u.css';
import '../../css/i/if0ri8-so.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gsuy7qb9u"/><path class="if0ri8-so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:flexbicep"} {...others} />);
}

export default Component;
