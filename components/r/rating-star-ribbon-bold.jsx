import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geymjob6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="geymjob6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rating-star-ribbon-bold"} {...others} />);
}

export default Component;
