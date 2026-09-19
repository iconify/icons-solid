import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj25fl2bm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj25fl2bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:check-verified"} {...others} />);
}

export default Component;
