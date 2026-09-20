import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r31v6djmg.css';
import '../../css/h/h8wl53bui.css';
import '../../css/c/c7y1ahbub.css';
import '../../css/p/p-n5subdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r31v6djmg"/><path class="h8wl53bui"/><path class="c7y1ahbub"/><path class="p-n5subdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:slack-alt"} {...others} />);
}

export default Component;
