import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd6cracno.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vd6cracno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:service-filled"} {...others} />);
}

export default Component;
