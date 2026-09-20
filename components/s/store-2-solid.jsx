import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eppuz1lar.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eppuz1lar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:store-2-solid"} {...others} />);
}

export default Component;
