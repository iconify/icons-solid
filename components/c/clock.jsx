import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmk826btk.css';
import '../../css/f/f6hca-bnv.css';
import '../../css/f/fpr104b-q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hmk826btk"/><path class="f6hca-bnv"/><path class="fpr104b-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:clock"} {...others} />);
}

export default Component;
