import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npgudrbvm.css';
import '../../css/s/sqx9578-o.css';
import '../../css/v/v1pzelk4p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="npgudrbvm"/><path class="sqx9578-o"/><path class="v1pzelk4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:balloon"} {...others} />);
}

export default Component;
