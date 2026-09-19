import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8p9k171u.css';
import '../../css/x/xx72yyb6l.css';
import '../../css/o/ovoprwbgx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8p9k171u"/><path class="xx72yyb6l"/><path class="ovoprwbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-tv"} {...others} />);
}

export default Component;
