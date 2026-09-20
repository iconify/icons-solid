import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9t_h3jeq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n9t_h3jeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rounded-triangle-right"} {...others} />);
}

export default Component;
