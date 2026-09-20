import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-5tw0hwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-5tw0hwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:label-multiple"} {...others} />);
}

export default Component;
