import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6riqxspa.css';
import '../../css/o/o2503rbla.css';
import '../../css/y/yti26qboi.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="v6riqxspa"/><path class="o2503rbla"/><path class="yti26qboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:unknown"} {...others} />);
}

export default Component;
