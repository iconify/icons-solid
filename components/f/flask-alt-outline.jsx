import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-wvqqbgn.css';
import '../../css/u/usv0f7brb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-wvqqbgn"/><path clip-rule="evenodd" class="usv0f7brb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:flask-alt-outline"} {...others} />);
}

export default Component;
