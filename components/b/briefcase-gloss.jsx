import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1v7bsd3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1v7bsd3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-gloss"} {...others} />);
}

export default Component;
