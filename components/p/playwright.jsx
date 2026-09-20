import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvv31odee.css';
import '../../css/c/c8c70ibjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pvv31odee"/><path class="c8c70ibjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:playwright"} {...others} />);
}

export default Component;
