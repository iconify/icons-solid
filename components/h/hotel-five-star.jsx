import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ax5vvq6vn.css';
import '../../css/e/eloicbcre.css';
import '../../css/r/r0b997bob.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ax5vvq6vn"/><path class="eloicbcre"/><path class="r0b997bob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hotel-five-star"} {...others} />);
}

export default Component;
