import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfrh88v8w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dfrh88v8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:chevron-down-wide"} {...others} />);
}

export default Component;
