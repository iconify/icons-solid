import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtc2tdbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wtc2tdbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:radar-fill"} {...others} />);
}

export default Component;
