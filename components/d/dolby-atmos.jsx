import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp99ldnqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sp99ldnqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:dolby-atmos"} {...others} />);
}

export default Component;
