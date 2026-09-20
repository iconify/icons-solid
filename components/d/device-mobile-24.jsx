import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvve5bzij.css';
import '../../css/u/u9ixn_sru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvve5bzij"/><path class="u9ixn_sru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:device-mobile-24"} {...others} />);
}

export default Component;
