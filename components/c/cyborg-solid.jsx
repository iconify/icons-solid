import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz2u3n6qt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xz2u3n6qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cyborg-solid"} {...others} />);
}

export default Component;
