import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4iudzo1t.css';
import '../../css/t/txqx25ycu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4iudzo1t"/><path class="txqx25ycu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cat-body"} {...others} />);
}

export default Component;
