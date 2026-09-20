import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7orre6ne.css';
import '../../css/n/nk_c-zevr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7orre6ne"/><path class="nk_c-zevr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:times-circle"} {...others} />);
}

export default Component;
