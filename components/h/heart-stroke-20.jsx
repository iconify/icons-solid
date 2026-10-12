import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sut_o-gje.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sut_o-gje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:heart-stroke-20"} {...others} />);
}

export default Component;
