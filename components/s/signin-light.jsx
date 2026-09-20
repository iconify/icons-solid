import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8tws73yk.css';
import '../../css/w/wn5ynabza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8tws73yk"/><path class="wn5ynabza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signin-light"} {...others} />);
}

export default Component;
