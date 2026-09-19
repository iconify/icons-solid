import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8lu4nblm.css';
import '../../css/c/c21u_2--p.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="p8lu4nblm"/><path class="c21u_2--p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-unmuted-fill-12"} {...others} />);
}

export default Component;
