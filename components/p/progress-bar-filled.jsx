import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff8p10v1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ff8p10v1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:progress-bar-filled"} {...others} />);
}

export default Component;
