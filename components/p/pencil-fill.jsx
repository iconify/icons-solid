import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d36krc8rv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d36krc8rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pencil-fill"} {...others} />);
}

export default Component;
