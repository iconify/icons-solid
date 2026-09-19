import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbhew13zs.css';
import '../../css/c/cbep2fbfg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jbhew13zs"/><path class="cbep2fbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:return-down-forward-sharp"} {...others} />);
}

export default Component;
