import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apk1qtb9j.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="apk1qtb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layer-rm"} {...others} />);
}

export default Component;
