import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzd4rrbit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzd4rrbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-play-filled"} {...others} />);
}

export default Component;
