import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol409_bjd.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1.5};
const content = `<path class="ol409_bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:magic"} {...others} />);
}

export default Component;
