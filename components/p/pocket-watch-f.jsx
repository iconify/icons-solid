import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekdku3bzp.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};
const content = `<path class="ekdku3bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:pocket-watch-f"} {...others} />);
}

export default Component;
