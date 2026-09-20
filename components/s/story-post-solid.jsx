import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2w2cs-yy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2w2cs-yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:story-post-solid"} {...others} />);
}

export default Component;
