import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu11w07_v.css';
import '../../css/f/f0yad6-af.css';
import '../../css/c/cq_2o7u8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vu11w07_v"/><path class="f0yad6-af"/><path clip-rule="evenodd" class="cq_2o7u8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-broken-outline"} {...others} />);
}

export default Component;
