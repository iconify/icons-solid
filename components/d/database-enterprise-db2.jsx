import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-8vxrbgb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v-8vxrbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:database-enterprise-db2"} {...others} />);
}

export default Component;
