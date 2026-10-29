import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkhgkrtkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkhgkrtkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:align-center-horizontal"} {...others} />);
}

export default Component;
