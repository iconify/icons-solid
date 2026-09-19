import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrooq11ts.css';
import '../../css/a/apkzo_3wp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrooq11ts"/><path class="apkzo_3wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-sparkle-filled"} {...others} />);
}

export default Component;
