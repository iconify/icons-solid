import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxk9dhkgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxk9dhkgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:download-cloud-fill"} {...others} />);
}

export default Component;
