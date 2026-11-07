import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3uje9bbo.css';
import '../../css/v/v1qydc12m.css';
import '../../css/e/er-a0qb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3uje9bbo"/><path class="v1qydc12m"/><path class="er-a0qb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
