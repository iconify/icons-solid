import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de4okpb9e.css';
import '../../css/x/x6suj9b7h.css';
import '../../css/r/rwj7e9bas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de4okpb9e"/><path class="x6suj9b7h"/><path class="rwj7e9bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uqc"} {...others} />);
}

export default Component;
