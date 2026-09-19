import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zkd0ogbjs.css';
import '../../css/x/xxxv1cy8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zkd0ogbjs"/><path class="xxxv1cy8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-factorial-light"} {...others} />);
}

export default Component;
