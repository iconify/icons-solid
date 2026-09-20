import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsm-84idg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rsm-84idg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-lying-on-front-in-sun-on-surface"} {...others} />);
}

export default Component;
