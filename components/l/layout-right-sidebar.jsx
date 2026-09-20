import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpoml5myf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dpoml5myf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:layout-right-sidebar"} {...others} />);
}

export default Component;
