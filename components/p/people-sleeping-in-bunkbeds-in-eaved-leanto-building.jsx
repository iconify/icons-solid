import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikgh70cpz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ikgh70cpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:people-sleeping-in-bunkbeds-in-eaved-leanto-building"} {...others} />);
}

export default Component;
