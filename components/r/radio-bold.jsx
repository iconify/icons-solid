import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyu_2jbbj.css';
import '../../css/h/hh3uuxn4j.css';
import '../../css/h/hk6-kiz3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyu_2jbbj"/><path class="hh3uuxn4j"/><path clip-rule="evenodd" class="hk6-kiz3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-bold"} {...others} />);
}

export default Component;
