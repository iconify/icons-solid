import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulcef3b1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ulcef3b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:smiley-shocked-remix"} {...others} />);
}

export default Component;
