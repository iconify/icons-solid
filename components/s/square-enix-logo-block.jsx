import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pytm-kb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pytm-kb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:square-enix-logo-block"} {...others} />);
}

export default Component;
