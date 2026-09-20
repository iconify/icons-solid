import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkim5g7xs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkim5g7xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:npmjs-fill"} {...others} />);
}

export default Component;
