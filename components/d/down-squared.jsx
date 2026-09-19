import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tny7lbc-v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tny7lbc-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:down-squared"} {...others} />);
}

export default Component;
