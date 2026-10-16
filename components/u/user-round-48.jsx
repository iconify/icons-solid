import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zen2agbyu.css';
import '../../css/z/zaedueqlb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zen2agbyu"/><path class="zaedueqlb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-round-48"} {...others} />);
}

export default Component;
