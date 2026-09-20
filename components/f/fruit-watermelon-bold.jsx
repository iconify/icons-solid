import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiyx6zbdr.css';
import '../../css/c/c03wv0hyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiyx6zbdr"/><path class="c03wv0hyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fruit-watermelon-bold"} {...others} />);
}

export default Component;
