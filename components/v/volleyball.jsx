import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8quyib2t.css';
import '../../css/k/kw4-qabzh.css';
import '../../css/t/tdwbu_b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8quyib2t wm-a"/><path class="kw4-qabzh wm-a"/><path class="tdwbu_b5f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:volleyball"} {...others} />);
}

export default Component;
