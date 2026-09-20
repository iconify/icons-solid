import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks5i7cc0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ks5i7cc0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:food-spotting-logo-2-block"} {...others} />);
}

export default Component;
