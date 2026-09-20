import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgo2dqivu.css';
import '../../css/s/s4p2w4bkv.css';
import '../../css/r/rxz6rmbtd.css';
import '../../css/w/w181xqb3u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tgo2dqivu"/><path class="s4p2w4bkv"/><path class="rxz6rmbtd"/><path class="w181xqb3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:react-ts"} {...others} />);
}

export default Component;
