import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrjnrtufb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrjnrtufb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hammer-sharp"} {...others} />);
}

export default Component;
