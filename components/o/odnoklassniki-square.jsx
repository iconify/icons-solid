import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwj_zibxz.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="nwj_zibxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:odnoklassniki-square"} {...others} />);
}

export default Component;
