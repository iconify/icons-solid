import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omh5kl7yl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omh5kl7yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-quaver-active"} {...others} />);
}

export default Component;
