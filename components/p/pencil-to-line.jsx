import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izny3lyjm.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="izny3lyjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:pencil-to-line"} {...others} />);
}

export default Component;
