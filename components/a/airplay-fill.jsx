import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuq_uun0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vuq_uun0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:airplay-fill"} {...others} />);
}

export default Component;
