import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vzmo0wbuc.css';
import '../../css/c/cene_fbuj.css';
import '../../css/j/j9d1q1wok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vzmo0wbuc"/><path class="cene_fbuj"/><path class="j9d1q1wok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:contact-02"} {...others} />);
}

export default Component;
