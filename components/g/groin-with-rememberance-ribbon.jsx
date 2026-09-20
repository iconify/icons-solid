import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrgrmx64i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hrgrmx64i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:groin-with-rememberance-ribbon"} {...others} />);
}

export default Component;
