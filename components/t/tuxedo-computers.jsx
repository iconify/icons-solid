import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa6r-zkqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wa6r-zkqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tuxedo-computers"} {...others} />);
}

export default Component;
