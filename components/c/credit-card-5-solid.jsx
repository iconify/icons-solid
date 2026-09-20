import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmj_u7gyd.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pmj_u7gyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:credit-card-5-solid"} {...others} />);
}

export default Component;
