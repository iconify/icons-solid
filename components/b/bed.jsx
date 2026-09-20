import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymit52bkh.css';
import '../../css/s/sil2n14km.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ymit52bkh"/><path class="sil2n14km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:bed"} {...others} />);
}

export default Component;
