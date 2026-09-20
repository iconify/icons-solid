import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr6vb84ov.css';
import '../../css/k/kdw9f6x7v.css';
import '../../css/m/mu_a5xqvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cr6vb84ov"/><path class="kdw9f6x7v"/><path class="mu_a5xqvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:box"} {...others} />);
}

export default Component;
