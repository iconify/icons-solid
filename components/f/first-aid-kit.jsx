import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/astn9tk8w.css';
import '../../css/e/etwwuac6b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="astn9tk8w"/><path class="etwwuac6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:first-aid-kit"} {...others} />);
}

export default Component;
