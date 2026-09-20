import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sisycybjx.css';
import '../../css/o/om9zpebmo.css';
import '../../css/o/ollo3sb5z.css';
import '../../css/c/cs5k_nzsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sisycybjx"/><path class="om9zpebmo"/><path class="ollo3sb5z"/><path class="cs5k_nzsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:conversation-sync"} {...others} />);
}

export default Component;
