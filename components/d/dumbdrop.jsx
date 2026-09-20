import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9a1-lbya.css';
import '../../css/x/xl9oz1zix.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="g9a1-lbya"/><path class="xl9oz1zix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbdrop"} {...others} />);
}

export default Component;
