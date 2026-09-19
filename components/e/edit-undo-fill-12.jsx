import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgygprbzp.css';
import '../../css/n/nkbsn0brg.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="mgygprbzp"/><path class="nkbsn0brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:edit-undo-fill-12"} {...others} />);
}

export default Component;
