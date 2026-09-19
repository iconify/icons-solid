import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak4zvnrpk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ak4zvnrpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cross-ring-two"} {...others} />);
}

export default Component;
