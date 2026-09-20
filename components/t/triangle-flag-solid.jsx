import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx6yl2nkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cx6yl2nkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:triangle-flag-solid"} {...others} />);
}

export default Component;
