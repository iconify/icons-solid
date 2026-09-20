import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlu90bg6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dlu90bg6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-upscale-spark-remix"} {...others} />);
}

export default Component;
