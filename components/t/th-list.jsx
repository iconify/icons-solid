import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwoeytogu.css';
import '../../css/c/cc3fl7wwz.css';
import '../../css/x/xul7skbaf.css';
import '../../css/k/k6fth3b8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwoeytogu"/><circle class="cc3fl7wwz"/><circle class="xul7skbaf"/><circle class="k6fth3b8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:th-list"} {...others} />);
}

export default Component;
