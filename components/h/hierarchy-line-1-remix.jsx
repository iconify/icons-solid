import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpu_c0btc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tpu_c0btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hierarchy-line-1-remix"} {...others} />);
}

export default Component;
