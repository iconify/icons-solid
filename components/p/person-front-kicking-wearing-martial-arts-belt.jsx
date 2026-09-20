import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aih13zb3t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="aih13zb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-front-kicking-wearing-martial-arts-belt"} {...others} />);
}

export default Component;
