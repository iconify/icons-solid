import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk17zl5nv.css';
import '../../css/q/qjhu6dbua.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bk17zl5nv"/><path class="qjhu6dbua"/><path class="tz_5mvbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:web-services-task-definition-version"} {...others} />);
}

export default Component;
