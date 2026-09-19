import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/g5oougblb.css';
import '../../css/z/zsylbebuv.css';
import '../../css/j/j0sc3zbla.css';
import '../../css/t/ttnpst71b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="g5oougblb"/><path class="zsylbebuv"/><path class="j0sc3zbla"/><path class="ttnpst71b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-right-one"} {...others} />);
}

export default Component;
