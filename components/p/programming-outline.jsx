import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/augjxln2c.css';
import '../../css/c/c1ebsvb3l.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="augjxln2c"/><path class="c1ebsvb3l"/><path clip-rule="evenodd" class="nbozb93jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:programming-outline"} {...others} />);
}

export default Component;
