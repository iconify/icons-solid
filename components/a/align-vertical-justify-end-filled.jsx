import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0si7bc9c.css';
import '../../css/c/c7ja4vb8i.css';
import '../../css/k/knqltxb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="m0si7bc9c"/><rect class="c7ja4vb8i"/><path class="knqltxb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-vertical-justify-end-filled"} {...others} />);
}

export default Component;
