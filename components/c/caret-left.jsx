import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faph03-kn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="faph03-kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:caret-left"} {...others} />);
}

export default Component;
