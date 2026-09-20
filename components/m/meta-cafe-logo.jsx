import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7hso62ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7hso62ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:meta-cafe-logo"} {...others} />);
}

export default Component;
