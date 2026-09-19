import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9ocujzsb.css';
import '../../css/v/va-9bkvho.css';
import '../../css/y/y7ctxsu2m.css';
import '../../css/b/brn_jbgsk.css';
import '../../css/n/ng5d0w9of.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y9ocujzsb"/><path class="va-9bkvho"/><path class="y7ctxsu2m"/><path class="brn_jbgsk"/><path class="ng5d0w9of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:factory"} {...others} />);
}

export default Component;
