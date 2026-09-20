import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht4ivw9gu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ht4ivw9gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:settings-fill"} {...others} />);
}

export default Component;
