import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gslw0nbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gslw0nbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:notebook-edit"} {...others} />);
}

export default Component;
