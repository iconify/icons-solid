import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww-xcxiwj.css';
import '../../css/g/gdczw0sve.css';
import '../../css/f/f1vttpb1l.css';
import '../../css/y/y3owh01jo.css';
import '../../css/g/gpqn85sba.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ww-xcxiwj"/><g class="gdczw0sve"><path class="f1vttpb1l"/><path class="y3owh01jo"/></g><path class="gpqn85sba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:lua-wordmark"} {...others} />);
}

export default Component;
