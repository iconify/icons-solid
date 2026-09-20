import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0gifg4or.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0gifg4or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-frame2-filled"} {...others} />);
}

export default Component;
