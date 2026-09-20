import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdtzqfxwt.css';
import '../../css/j/jk619tm-u.css';
import '../../css/w/wm7ofvb7g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mdtzqfxwt"/><path class="jk619tm-u"/><path class="wm7ofvb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dawarich-light"} {...others} />);
}

export default Component;
