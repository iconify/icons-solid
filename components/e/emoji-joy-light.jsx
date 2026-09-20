import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi4tymrtz.css';
import '../../css/k/k51gsefpd.css';
import '../../css/u/u1wdaq6xr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qi4tymrtz"/><path clip-rule="evenodd" class="k51gsefpd"/><path clip-rule="evenodd" class="u1wdaq6xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-joy-light"} {...others} />);
}

export default Component;
