import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo-y55b-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bo-y55b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:upload-brackets"} {...others} />);
}

export default Component;
