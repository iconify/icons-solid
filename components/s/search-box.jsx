import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpe_zkb5e.css';
import '../../css/h/heok19bbn.css';
import '../../css/c/cz1u-qu3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rpe_zkb5e"/><path class="heok19bbn"/><path class="cz1u-qu3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-box"} {...others} />);
}

export default Component;
