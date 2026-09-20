import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdortxboe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdortxboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:voice-cricle-filled"} {...others} />);
}

export default Component;
