import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd2p9zlpz.css';
import '../../css/n/n2bq_64ql.css';
import '../../css/r/rhbj1tb0k.css';
import '../../css/h/h30wgibno.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dd2p9zlpz"/><path clip-rule="evenodd" class="n2bq_64ql"/><path clip-rule="evenodd" class="rhbj1tb0k"/><path clip-rule="evenodd" class="h30wgibno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:trophy-outline"} {...others} />);
}

export default Component;
