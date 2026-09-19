import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7b5tjbqa.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="t7b5tjbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cpap-tubes"} {...others} />);
}

export default Component;
