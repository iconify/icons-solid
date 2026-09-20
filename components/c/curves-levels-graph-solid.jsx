import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3cf4bbin.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s3cf4bbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:curves-levels-graph-solid"} {...others} />);
}

export default Component;
