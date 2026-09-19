import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbw7jyfci.css';
import '../../css/e/ebwjynfzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbw7jyfci"/><path class="ebwjynfzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:newspaper"} {...others} />);
}

export default Component;
