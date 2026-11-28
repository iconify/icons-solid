import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro42e1bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary ro42e1bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:workflow-duotone"} {...others} />);
}

export default Component;
