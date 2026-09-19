import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh36b_exl.css';
import '../../css/t/t2wztiban.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bh36b_exl"/><path class="t2wztiban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:worship-muslim"} {...others} />);
}

export default Component;
