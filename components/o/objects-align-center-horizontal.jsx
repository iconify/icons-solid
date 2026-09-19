import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocsj0ygwj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ocsj0ygwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:objects-align-center-horizontal"} {...others} />);
}

export default Component;
