import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ork6cbxuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ork6cbxuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:northwest-southeast-fill"} {...others} />);
}

export default Component;
