import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmw0msqap.css';
import '../../css/j/jbgenzzof.css';
import '../../css/p/p09aqjb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bmw0msqap"/><path class="jbgenzzof"/><path class="p09aqjb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-out-bold"} {...others} />);
}

export default Component;
