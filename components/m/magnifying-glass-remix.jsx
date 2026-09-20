import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxxo6lb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dxxo6lb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:magnifying-glass-remix"} {...others} />);
}

export default Component;
