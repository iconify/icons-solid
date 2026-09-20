import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctbi4n0vv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctbi4n0vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:content-duplicate"} {...others} />);
}

export default Component;
