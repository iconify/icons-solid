import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv7o6gbgs.css';
import '../../css/a/a9nhzacts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jv7o6gbgs"/><path class="a9nhzacts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bell-minus"} {...others} />);
}

export default Component;
