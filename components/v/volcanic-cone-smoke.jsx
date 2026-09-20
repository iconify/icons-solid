import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awckl0dec.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="awckl0dec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:volcanic-cone-smoke"} {...others} />);
}

export default Component;
