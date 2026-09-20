import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stdec_j8d.css';
import '../../css/j/jryo535wr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stdec_j8d"/><path class="jryo535wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:image-file-jpg-bold"} {...others} />);
}

export default Component;
