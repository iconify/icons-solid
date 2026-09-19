import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4ut14voh.css';
import '../../css/j/jinu42run.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="h4ut14voh"/><path class="jinu42run"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-codepen-outline"} {...others} />);
}

export default Component;
