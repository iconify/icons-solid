import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nml_d7_9q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nml_d7_9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:skip-start-circle-fill"} {...others} />);
}

export default Component;
