import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk9_68w6u.css';
import '../../css/b/bm337jbbl.css';
import '../../css/f/ff8xd2bsy.css';
import '../../css/f/f8vhwlbyu.css';
import '../../css/r/rt6j9wblv.css';

const viewBox = {"width":200,"height":200};
const content = `<path class="yk9_68w6u"/><path class="bm337jbbl"/><path class="ff8xd2bsy"/><path class="f8vhwlbyu"/><path class="rt6j9wblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:red"} {...others} />);
}

export default Component;
