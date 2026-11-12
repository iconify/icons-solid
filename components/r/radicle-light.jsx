import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svh25cwvl.css';
import '../../css/m/m4c7wqb2i.css';
import '../../css/m/mqymo7s1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="svh25cwvl"/><path class="m4c7wqb2i"/><path class="mqymo7s1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radicle-light"} {...others} />);
}

export default Component;
