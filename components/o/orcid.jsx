import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_-5c-bkc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y_-5c-bkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:orcid"} {...others} />);
}

export default Component;
