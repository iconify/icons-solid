import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q19mp7b0m.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q19mp7b0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:bars-descending-align-left"} {...others} />);
}

export default Component;
