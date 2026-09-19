import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfi6zzj9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfi6zzj9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-watch-alt"} {...others} />);
}

export default Component;
