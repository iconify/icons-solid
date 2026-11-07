import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akht0jb-p.css';
import '../../css/e/emonbzgoh.css';
import '../../css/k/k84iwjbrg.css';
import '../../css/p/purlkwp6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akht0jb-p"/><path class="emonbzgoh"/><path class="k84iwjbrg"/><path class="purlkwp6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-outline"} {...others} />);
}

export default Component;
