import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0j-_5b5v.css';
import '../../css/b/bcn_4bbos.css';
import '../../css/e/ekzzdgb2f.css';
import '../../css/k/k4-cxey3a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l0j-_5b5v"/><path class="bcn_4bbos"/><path class="ekzzdgb2f"/><path class="k4-cxey3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:join-full"} {...others} />);
}

export default Component;
