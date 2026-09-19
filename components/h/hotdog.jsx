import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-vm5ubxp.css';
import '../../css/w/w54lu2b9d.css';
import '../../css/h/h432u9bts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-vm5ubxp"/><path class="w54lu2b9d"/><path class="h432u9bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:hotdog"} {...others} />);
}

export default Component;
