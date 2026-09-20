import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwj4rxbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwj4rxbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ati-logo"} {...others} />);
}

export default Component;
