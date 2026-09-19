import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u63daxw1l.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u63daxw1l"/><path clip-rule="evenodd" class="daxtkab1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:medium-outline"} {...others} />);
}

export default Component;
