import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htzosabxt.css';
import '../../css/r/rbd0bhbbe.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="htzosabxt"/><path class="rbd0bhbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:snorkel"} {...others} />);
}

export default Component;
