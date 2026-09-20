import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crev81m-x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="crev81m-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wearing-helmet-paddling-raft"} {...others} />);
}

export default Component;
