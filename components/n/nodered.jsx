import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va6jvlbzo.css';
import '../../css/y/y0kw6z96g.css';
import '../../css/d/dgq02yorw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="va6jvlbzo"/><path class="y0kw6z96g"/><path class="dgq02yorw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nodered"} {...others} />);
}

export default Component;
