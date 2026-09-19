import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht_xe9bkp.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="ht_xe9bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:plus-app-fill"} {...others} />);
}

export default Component;
