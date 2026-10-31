import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ood22d57s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ood22d57s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stethoscope-gloss"} {...others} />);
}

export default Component;
