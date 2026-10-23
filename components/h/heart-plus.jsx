import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpw8u2-_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpw8u2-_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:heart-plus"} {...others} />);
}

export default Component;
