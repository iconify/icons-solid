import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_5p4ltcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_5p4ltcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:chevron-up"} {...others} />);
}

export default Component;
