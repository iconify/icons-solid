import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmpx7kb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rmpx7kb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:digital-ocean-logo-solid"} {...others} />);
}

export default Component;
