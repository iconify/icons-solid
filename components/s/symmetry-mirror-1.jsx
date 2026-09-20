import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djyuq76zq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djyuq76zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:symmetry-mirror-1"} {...others} />);
}

export default Component;
