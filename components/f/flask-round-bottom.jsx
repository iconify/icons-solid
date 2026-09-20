import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2dgx96ux.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="n2dgx96ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:flask-round-bottom"} {...others} />);
}

export default Component;
