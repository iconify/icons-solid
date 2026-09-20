import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd4-2ibfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dd4-2ibfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:landing-fill"} {...others} />);
}

export default Component;
