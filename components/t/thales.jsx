import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia2z1bcgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ia2z1bcgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:thales"} {...others} />);
}

export default Component;
