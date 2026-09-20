import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kosp5ac3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kosp5ac3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aiqfome"} {...others} />);
}

export default Component;
