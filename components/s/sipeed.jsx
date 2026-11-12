import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rld-_ccic.css';
import '../../css/f/fkh3zlqaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rld-_ccic"/><path class="fkh3zlqaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sipeed"} {...others} />);
}

export default Component;
