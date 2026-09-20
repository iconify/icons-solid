import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-nz-qbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z-nz-qbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-spacing-outline"} {...others} />);
}

export default Component;
