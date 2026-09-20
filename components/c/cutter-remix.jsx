import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztsk3ob8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ztsk3ob8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cutter-remix"} {...others} />);
}

export default Component;
