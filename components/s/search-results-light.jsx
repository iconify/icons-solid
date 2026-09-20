import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_936xi-v.css';
import '../../css/c/caqza3bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_936xi-v"/><path class="caqza3bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-results-light"} {...others} />);
}

export default Component;
