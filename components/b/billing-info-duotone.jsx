import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnsslsbew.css';
import '../../css/b/bog13w73d.css';
import '../../css/k/kila4w3tx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnsslsbew"/><path class="bog13w73d"/><path class="kila4w3tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:billing-info-duotone"} {...others} />);
}

export default Component;
