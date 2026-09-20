import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6m6xlb6p.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="q6m6xlb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:movie-rental"} {...others} />);
}

export default Component;
