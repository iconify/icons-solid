import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt6v-jbiv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xt6v-jbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:minus"} {...others} />);
}

export default Component;
