import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taf3qob0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="taf3qob0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:ember"} {...others} />);
}

export default Component;
