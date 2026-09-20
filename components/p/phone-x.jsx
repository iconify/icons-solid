import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyt4rsbar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyt4rsbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:phone-x"} {...others} />);
}

export default Component;
