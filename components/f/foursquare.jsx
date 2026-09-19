import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjgc9gb-q.css';

const viewBox = {"width":17,"height":24};
const content = `<path class="bjgc9gb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:foursquare"} {...others} />);
}

export default Component;
