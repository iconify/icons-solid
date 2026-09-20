import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa6oe_bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xa6oe_bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:one-finger-short-tap-solid"} {...others} />);
}

export default Component;
