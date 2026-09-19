import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl_dgobdx.css';
import '../../css/v/vvtsvebww.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="yl_dgobdx"/><path class="vvtsvebww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-dropbox"} {...others} />);
}

export default Component;
