import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov2f2fbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ov2f2fbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:scroll-filled"} {...others} />);
}

export default Component;
