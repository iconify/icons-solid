import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpz_xxn6w.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="hpz_xxn6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:gist-secret"} {...others} />);
}

export default Component;
