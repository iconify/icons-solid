import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1ah6mbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k1ah6mbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:zoom-logo-2-solid"} {...others} />);
}

export default Component;
