import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvcwdccyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvcwdccyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:youtube"} {...others} />);
}

export default Component;
