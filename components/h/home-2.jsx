import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3_mn_6bv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3_mn_6bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:home-2"} {...others} />);
}

export default Component;
