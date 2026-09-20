import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzdi1u2bq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bzdi1u2bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrows-left-right-above-waters"} {...others} />);
}

export default Component;
