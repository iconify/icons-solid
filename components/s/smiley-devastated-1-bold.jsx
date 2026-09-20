import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_eln7hov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_eln7hov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smiley-devastated-1-bold"} {...others} />);
}

export default Component;
