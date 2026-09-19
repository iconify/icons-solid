import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znpeg-p4p.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="znpeg-p4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:grip-horizontal"} {...others} />);
}

export default Component;
