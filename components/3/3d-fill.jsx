import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpv4762am.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kpv4762am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:3d-fill"} {...others} />);
}

export default Component;
