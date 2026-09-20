import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3vlkubrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f3vlkubrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:prescription-pills-drugs-healthcare-remix"} {...others} />);
}

export default Component;
