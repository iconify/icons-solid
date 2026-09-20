import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbkmeebpe.css';
import '../../css/f/fr-p43erz.css';
import '../../css/r/rn_zfz0lg.css';
import '../../css/h/hebbckb1t.css';
import '../../css/l/l85rmcbgo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qbkmeebpe"/><path class="fr-p43erz"/><path class="rn_zfz0lg"/><path class="hebbckb1t"/><path class="l85rmcbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feedlynx"} {...others} />);
}

export default Component;
