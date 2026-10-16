import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuqg75bpo.css';
import '../../css/s/silcg3bbo.css';
import '../../css/q/q84co3lsi.css';
import '../../css/e/e5nrzwjsg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fuqg75bpo"/><path class="silcg3bbo"/><path class="q84co3lsi"/><path class="e5nrzwjsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corn-20-bold"} {...others} />);
}

export default Component;
