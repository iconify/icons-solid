import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0_n4gb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l0_n4gb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:spa-remix"} {...others} />);
}

export default Component;
