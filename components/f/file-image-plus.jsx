import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eej_e7vke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eej_e7vke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:file-image-plus"} {...others} />);
}

export default Component;
