import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr5fyxn9w.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="fr5fyxn9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:video-alt"} {...others} />);
}

export default Component;
