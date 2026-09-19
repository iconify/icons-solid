import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsh3n7vpt.css';
import '../../css/n/npoomsb7x.css';
import '../../css/s/sg68hbv5e.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="nsh3n7vpt"/><path class="npoomsb7x"/><path class="sg68hbv5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:wifi"} {...others} />);
}

export default Component;
