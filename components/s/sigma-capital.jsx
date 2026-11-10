import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4_eootwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f4_eootwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:sigma-capital"} {...others} />);
}

export default Component;
