import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3ez0xyqh.css';
import '../../css/b/bnmfd8bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3ez0xyqh"/><path class="bnmfd8bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:export-24"} {...others} />);
}

export default Component;
