import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm2o0bbcb.css';
import '../../css/w/w5z9ayb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bm2o0bbcb"/><path class="w5z9ayb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vcore"} {...others} />);
}

export default Component;
