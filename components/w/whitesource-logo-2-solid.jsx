import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3z_lmzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yw3z_lmzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:whitesource-logo-2-solid"} {...others} />);
}

export default Component;
