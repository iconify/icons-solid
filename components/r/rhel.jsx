import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2ymc9bdx.css';
import '../../css/q/qtjow1bxk.css';
import '../../css/w/wk9hbdc0v.css';
import '../../css/b/bcqvqyk5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f2ymc9bdx"/><path class="qtjow1bxk"/><path class="wk9hbdc0v"/><path class="bcqvqyk5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rhel"} {...others} />);
}

export default Component;
