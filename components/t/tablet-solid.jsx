import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0zfj_7yy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d0zfj_7yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:tablet-solid"} {...others} />);
}

export default Component;
