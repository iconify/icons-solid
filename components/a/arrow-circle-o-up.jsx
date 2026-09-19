import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-922rvxz.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="b-922rvxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:arrow-circle-o-up"} {...others} />);
}

export default Component;
