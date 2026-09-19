import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of88hrgyb.css';
import '../../css/h/hcquu7bpt.css';
import '../../css/y/ys_j6cbby.css';
import '../../css/b/b99j4mbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of88hrgyb"/><path class="hcquu7bpt"/><path class="ys_j6cbby"/><path class="b99j4mbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:rails"} {...others} />);
}

export default Component;
