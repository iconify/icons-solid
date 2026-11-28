import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apz4wh5li.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="apz4wh5li"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:signpost"} {...others} />);
}

export default Component;
