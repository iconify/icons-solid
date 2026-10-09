import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coivkzecr.css';
import '../../css/a/a0l7r1bnq.css';
import '../../css/z/zxq_-9rwo.css';
import '../../css/o/oz3bcmbbu.css';
import '../../css/h/hg0-cjyiw.css';
import '../../css/g/gak43pbcv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="coivkzecr"/><path class="a0l7r1bnq"/><path class="zxq_-9rwo"/><path class="oz3bcmbbu"/><path class="hg0-cjyiw"/><path class="gak43pbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-wind-20-bold"} {...others} />);
}

export default Component;
