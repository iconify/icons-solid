import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmqbshfgv.css';
import '../../css/f/fkwnb7hig.css';
import '../../css/f/f-cbqwb3y.css';
import '../../css/v/vo2_w5r4u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmqbshfgv"/><path class="fkwnb7hig"/><path class="f-cbqwb3y"/><path class="vo2_w5r4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homebox"} {...others} />);
}

export default Component;
