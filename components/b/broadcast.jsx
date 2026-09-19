import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cj31t5b3p.css';
import '../../css/c/cnil5s0ro.css';
import '../../css/i/ihnjkk7ba.css';
import '../../css/v/v57kzxn8c.css';
import '../../css/g/gp58ztbfp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="cj31t5b3p"/><path class="cnil5s0ro"/><path class="ihnjkk7ba"/><path class="v57kzxn8c"/><path class="gp58ztbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:broadcast"} {...others} />);
}

export default Component;
