import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr-sxhb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kr-sxhb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:food-spotting-logo-1-solid"} {...others} />);
}

export default Component;
