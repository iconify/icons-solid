import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d213agn5f.css';
import '../../css/g/gedrdccde.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d213agn5f"/><path class="gedrdccde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-in-stroke-20"} {...others} />);
}

export default Component;
