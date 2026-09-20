import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b66k_dq-g.css';
import '../../css/k/k-jty3jzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b66k_dq-g"/><path clip-rule="evenodd" class="k-jty3jzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:server-fill"} {...others} />);
}

export default Component;
