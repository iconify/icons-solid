import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvyedwt0y.css';
import '../../css/a/ac0j8jqxa.css';
import '../../css/u/ucl9nybgr.css';
import '../../css/r/rsq9iwbuw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvyedwt0y"/><path class="ac0j8jqxa"/><path class="ucl9nybgr"/><path class="rsq9iwbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:labelito-light"} {...others} />);
}

export default Component;
