import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tua1clvxp.css';
import '../../css/i/imad5bjrh.css';
import '../../css/n/ngse4mb-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tua1clvxp"/><path class="imad5bjrh"/><path class="ngse4mb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chorizard-dark"} {...others} />);
}

export default Component;
