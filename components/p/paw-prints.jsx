import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq_tx75se.css';
import '../../css/q/qo9agdbov.css';
import '../../css/r/r-ll81b-u.css';
import '../../css/r/rk8y4oblx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gq_tx75se"/><path class="qo9agdbov"/><path class="r-ll81b-u"/><path class="rk8y4oblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:paw-prints"} {...others} />);
}

export default Component;
