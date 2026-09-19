import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qab_zlbij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qab_zlbij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:diamond-gem"} {...others} />);
}

export default Component;
