import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8lcblbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k8lcblbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-times-fill"} {...others} />);
}

export default Component;
