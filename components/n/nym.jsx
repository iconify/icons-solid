import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upd0nac5h.css';
import '../../css/z/zce1ctb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="upd0nac5h"/><path class="zce1ctb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nym"} {...others} />);
}

export default Component;
