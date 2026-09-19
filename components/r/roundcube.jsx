import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjbxx8b3o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pjbxx8b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:roundcube"} {...others} />);
}

export default Component;
