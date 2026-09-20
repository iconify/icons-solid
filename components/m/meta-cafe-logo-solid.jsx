import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lopm3jv9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lopm3jv9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:meta-cafe-logo-solid"} {...others} />);
}

export default Component;
