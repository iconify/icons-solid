import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za38b7bre.css';
import '../../css/y/yqtag0btf.css';
import '../../css/v/v12bizbqe.css';
import '../../css/u/uwnvacbei.css';
import '../../css/i/ibfy2lulz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow za38b7bre"/><path class="wm-k yqtag0btf"/><path class="v12bizbqe wm-k"/><path class="uwnvacbei wm-a"/><path class="ibfy2lulz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:audio-lines"} {...others} />);
}

export default Component;
