import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/babhpbcia.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="babhpbcia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-cross-country-skiing"} {...others} />);
}

export default Component;
