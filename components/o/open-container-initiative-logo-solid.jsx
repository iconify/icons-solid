import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co-sa0b7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="co-sa0b7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:open-container-initiative-logo-solid"} {...others} />);
}

export default Component;
