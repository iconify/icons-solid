import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx0wvsd8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tx0wvsd8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:locate-fixed-solid"} {...others} />);
}

export default Component;
