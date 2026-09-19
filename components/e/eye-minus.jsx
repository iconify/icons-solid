import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwe291bsk.css';
import '../../css/m/mgz4g1bbz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mwe291bsk"/><path class="mgz4g1bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:eye-minus"} {...others} />);
}

export default Component;
