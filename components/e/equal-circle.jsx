import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3-nd4bnk.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/f/fiavfxncv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3-nd4bnk"/><path class="bwibdw4bb"/><path class="fiavfxncv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:equal-circle"} {...others} />);
}

export default Component;
