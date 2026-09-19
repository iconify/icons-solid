import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3wbfm8wt.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="y3wbfm8wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mobile-clinic"} {...others} />);
}

export default Component;
