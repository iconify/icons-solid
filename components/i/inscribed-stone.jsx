import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2rhd2bmr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s2rhd2bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:inscribed-stone"} {...others} />);
}

export default Component;
