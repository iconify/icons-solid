import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9wmphbum.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="v9wmphbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:cloudy"} {...others} />);
}

export default Component;
