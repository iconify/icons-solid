import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kz3-vn6kb.css';
import '../../css/r/rq_kn7bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="kz3-vn6kb"/><path class="rq_kn7bnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:beats-studio-logo"} {...others} />);
}

export default Component;
