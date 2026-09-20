import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7vo4nbxw.css';
import '../../css/x/x9vltugms.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g7vo4nbxw"/><path class="x9vltugms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notesnook"} {...others} />);
}

export default Component;
