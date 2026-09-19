import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blju_tb2r.css';

const viewBox = {"width":19,"height":24};
const content = `<path class="blju_tb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:intersex"} {...others} />);
}

export default Component;
