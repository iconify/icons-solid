import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a53go_wkz.css';
import '../../css/c/ck-pzhbhq.css';
import '../../css/c/c7gp0hbth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a53go_wkz"/><path class="ck-pzhbhq"/><path class="c7gp0hbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mnd"} {...others} />);
}

export default Component;
