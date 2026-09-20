import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ygzubzy.css';
import '../../css/p/pjqpfrbrk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o1ygzubzy"/><path class="pjqpfrbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-headphones-human"} {...others} />);
}

export default Component;
