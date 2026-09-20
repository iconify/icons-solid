import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2r9gabou.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o2r9gabou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:graph-arrow-user-increase-remix"} {...others} />);
}

export default Component;
