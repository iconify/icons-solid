import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boitwxbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="boitwxbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:group-running"} {...others} />);
}

export default Component;
