import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng6ptzbdb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ng6ptzbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vehicle-services"} {...others} />);
}

export default Component;
