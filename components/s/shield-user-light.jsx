import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiqehwiew.css';
import '../../css/w/we_txpblk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kiqehwiew"/><path class="we_txpblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:shield-user-light"} {...others} />);
}

export default Component;
