import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utdc-ibes.css';
import '../../css/e/ebr8uinkx.css';
import '../../css/i/ibwikzbkq.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="utdc-ibes"/><circle class="ebr8uinkx"/><circle class="ibwikzbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:just"} {...others} />);
}

export default Component;
