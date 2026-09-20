import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5cc4gltw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5cc4gltw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:unsplash-fill"} {...others} />);
}

export default Component;
