import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ophaigqef.css';
import '../../css/g/gc8-4tb2b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ophaigqef"/><path class="gc8-4tb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:check-square"} {...others} />);
}

export default Component;
