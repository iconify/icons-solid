import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y30mjzbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y30mjzbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:video-upload-line"} {...others} />);
}

export default Component;
