import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odh4hebtw.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="odh4hebtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:messenger-stroke-12"} {...others} />);
}

export default Component;
