import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpyt5qnqj.css';
import '../../css/o/oaj_2iwov.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dpyt5qnqj"/><path class="oaj_2iwov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-three-finger"} {...others} />);
}

export default Component;
