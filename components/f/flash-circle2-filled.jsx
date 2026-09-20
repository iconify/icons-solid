import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/retbqifwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="retbqifwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flash-circle2-filled"} {...others} />);
}

export default Component;
