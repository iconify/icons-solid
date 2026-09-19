import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql_ckoerv.css';
import '../../css/p/p6q8xum6y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ql_ckoerv"/><path class="p6q8xum6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fanqiexiaoshuo"} {...others} />);
}

export default Component;
