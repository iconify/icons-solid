import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fl1u8-q9v.css';
import '../../css/f/f7iamzbup.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fl1u8-q9v"/><circle class="f7iamzbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rotate-one"} {...others} />);
}

export default Component;
