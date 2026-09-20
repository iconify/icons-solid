import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb7672bzg.css';
import '../../css/e/eyk4iwcnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb7672bzg"/><path class="eyk4iwcnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vee"} {...others} />);
}

export default Component;
