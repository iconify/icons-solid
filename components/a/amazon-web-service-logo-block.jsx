import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0gm6abzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k0gm6abzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-web-service-logo-block"} {...others} />);
}

export default Component;
