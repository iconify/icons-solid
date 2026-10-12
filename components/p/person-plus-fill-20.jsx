import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klg708bis.css';
import '../../css/n/nib5s-byi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="klg708bis"/><path class="nib5s-byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-plus-fill-20"} {...others} />);
}

export default Component;
