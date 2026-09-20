import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vphtn-bck.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="vphtn-bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:menu-up-fill"} {...others} />);
}

export default Component;
