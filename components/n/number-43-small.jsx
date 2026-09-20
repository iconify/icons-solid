import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re9ycvy8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re9ycvy8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-43-small"} {...others} />);
}

export default Component;
