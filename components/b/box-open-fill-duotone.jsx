import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxq2l9bzi.css';
import '../../css/w/w_jw7cb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxq2l9bzi"/><path clip-rule="evenodd" class="w_jw7cb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-open-fill-duotone"} {...others} />);
}

export default Component;
