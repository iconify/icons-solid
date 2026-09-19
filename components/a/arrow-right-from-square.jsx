import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0f7br4-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f0f7br4-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-right-from-square"} {...others} />);
}

export default Component;
